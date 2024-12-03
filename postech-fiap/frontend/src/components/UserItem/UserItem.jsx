import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";

export function UserItem({ _id, name, email }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.id}>Id: {_id}</Text>
                <Text style={styles.title}>Nome: {name}</Text>
                <Text style={styles.title}>E-mail: {email}</Text>
            </View>
        </View>
    );
}
