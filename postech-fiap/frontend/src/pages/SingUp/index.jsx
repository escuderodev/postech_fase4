import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function SingUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro de Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confime sua senha'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('DisciplineForm')
                    }}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}