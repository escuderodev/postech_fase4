import React from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Alert,
    FlatList,
} from "react-native";
//import { ProfessorList } from "../../data/professores.js";
import { ProfessorItem } from "../../components/ProfessorItem/ProfessorItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";
import { useState, useEffect } from "react";
import { listUsers } from "../../services/userService";

export function ListProfessor() {
    const navigation = useNavigation();
    const [ProfessorList, setProfessorList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await listUsers();
            console.log("Dados recebidos da API:", response);
            setProfessorList(response);
            Alert.alert("Professores carregados com sucesso!");
        };
        fetchUsers();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Professores:</Text>
            </View>
            <View style={styles.scrollViewContainer}>
                <FlatList
                    data={ProfessorList}
                    renderItem={({ item }) => (
                        <ProfessorItem _id={item._id} user={item.name} />
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </>
    );
}
