import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import {
    listDisciplines,
    deleteDiscipline,
} from "../../services/disciplineService.js";
//import { discipliniesList } from "../../data/disciplinies.js";
import { DisciplinieItem } from "../../components/DisciplinieItem/DisciplinieItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";

export function DiscipliniesList() {
    const navigation = useNavigation();
    const [DisciplineList, setDisciplineList] = useState([]);

    const fetchDisciplines = async () => {
        const response = await listDisciplines();
        console.log("Dados recebidos da API:", response);
        setDisciplineList(response);
        Alert.alert("Disciplinas carregadas com sucesso!");
    };

    useEffect(() => {
        fetchDisciplines();
    }, []);

    const handleCreateDiscipline = async (title) => {
        try {
            const response = await createDiscipline(title);
            setDisciplineList([...DisciplineList, response]);
        } catch (error) {
            console.error("Failed to create discipline:", error);
        }
    };

    const handleDeleteDiscipline = async (id) => {
        try {
            await deleteDiscipline(id);
            setDisciplineList(DisciplineList.filter((item) => item._id !== id));
        } catch (error) {
            console.error("Failed to delete discipline:", error);
        }
    };

    const onUpdate = () => {
        setTimeout(() => {
            setUpdate(!update);
        }, 300);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Disciplinas Cadastradas:</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("DisciplineForm", {
                            onCreate: handleCreateDiscipline,
                        });
                    }}
                >
                    <Text style={styles.buttonText}>Nova Disciplina</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollViewContainer}>
                <FlatList
                    data={DisciplineList}
                    renderItem={({ item }) => (
                        <DisciplinieItem
                            {...item}
                            onDelete={handleDeleteDiscipline}
                        />
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </SafeAreaView>
    );
}
