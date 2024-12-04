import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";
import {
    deleteDiscipline,
    updateDiscipline,
} from "../../services/disciplineService";

export function DisciplinieItem({ _id, title, author, createdAt, onDelete }) {
    const navigation = useNavigation();

    const handleDelete = async () => {
        try {
            await onDelete(_id);
        } catch (error) {
            console.error("Error deleting discipline:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Disciplina: {title}</Text>
                <Text style={styles.title}>ID: {_id}</Text>
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate("DisciplineForm");
                        }}
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            deleteDiscipline(_id);
                            navigation.navigate("DiscipliniesList");
                        }}
                    >
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
