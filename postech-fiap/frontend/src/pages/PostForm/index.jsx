import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import do Picker
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function PostForm() {
    const navigation = useNavigation();
    const [selectedDiscipline, setSelectedDiscipline] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro de Post</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Conteúdo"
                    multiline={true}
                />
                <Text style={styles.title}>Disciplina:</Text>
                <Picker
                    selectedValue={selectedDiscipline}
                    onValueChange={(itemValue) => setSelectedDiscipline(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione uma disciplina" value="" />
                    <Picker.Item label="TypeScript" value="typescript" />
                    <Picker.Item label="React Native" value="react-native" />
                    <Picker.Item label="JavaScript Avançado" value="javascript" />
                    <Picker.Item label="Node.js e Express" value="node-express" />
                    <Picker.Item label="MongoDB para Iniciantes" value="mongodb" />
                </Picker>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('ListPost');
                    }}
                >
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
