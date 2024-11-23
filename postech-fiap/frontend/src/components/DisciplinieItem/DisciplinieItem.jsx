import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function DisciplinieItem({ _id, title, author, createdAt }) {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Disciplina: {title}</Text>
                <Text style={styles.title}>Autor: {author}</Text>
                <View style={styles.actionButtons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('DisciplineForm')
                        }}
                    >
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('DisciplineForm')
                        }}
                    >
                        <Text style={styles.buttonText}>Excluir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}