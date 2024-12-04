import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { listUsers } from "../../services/userService";
import { login } from "../../services/authService";
import { useState } from "react";

export function LogIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInLeft"
                delay={300}
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Bem vindo(a)!</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    placeholder="seuemail@provedor.com.br"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    placeholder="sua senha"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Email:", email);
                        login(email, password);
                        navigation.navigate("ListPostAdm");
                    }}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonNewAccount}
                    onPress={async () => {
                        navigation.navigate("SingUp");
                    }}
                >
                    <Text style={styles.buttonRegisterText}>
                        Não possui uma conta? Registre-se!
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
