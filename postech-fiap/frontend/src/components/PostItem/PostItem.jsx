import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";

export function PostItem({ post, onPress }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.title}>Titulo: {post.title}</Text>
                    <Text style={styles.title}>
                        Disciplina: {post.disciplina}
                    </Text>
                    <Text style={styles.title}>Autor: {post.author}</Text>
                </TouchableOpacity>

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
                            navigation.navigate("DisciplineForm");
                        }}
                    >
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
