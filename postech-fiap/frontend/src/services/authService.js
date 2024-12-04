import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL_BASE, PORT } from "./fetchConfig";

export const login = async (usuario, senha) => {
    console.log(usuario);
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: usuario,
                password: senha,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Erro ao fazer login: " + errorData.message);
            console.log("Erro ao fazer login: " + errorData.message);
        }
        const data = await response.json();
        console.log("data", data);
        console.log(data.result.token);
        const token = data.result.token;
        await setToken(token);

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem("authToken");
        return token;
    } catch (error) {
        console.error("Erro ao obter o token:", error);
        return null;
    }
};

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem("authToken", token);
    } catch (error) {
        console.error("Erro ao salvar o token:", error);
    }
};

export const logout = async () => {
    try {
        await AsyncStorage.removeItem("authToken");
    } catch (error) {
        console.error("Erro ao remover o token:", error);
    }
};
