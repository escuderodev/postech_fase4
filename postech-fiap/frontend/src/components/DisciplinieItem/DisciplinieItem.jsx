import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles.js';

export function DisciplinieItem({ _id, title, createdAt }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.id}>Id: {_id}</Text>
                <Text style={styles.title}>Disciplina: {title}</Text>
                <Text style={styles.createdAt}>Criada em: {createdAt}</Text>
            </View>
        </View>
    );
}