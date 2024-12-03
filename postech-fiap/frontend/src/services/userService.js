import { URL_BASE, PORT } from "./fetchConfig";

export const createUser = async ({
    name,
    email,
    password,
    confirmPassword,
}) => {
    console.log("URL_BASE", URL_BASE);
    console.log("PORT", PORT);
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Erro ao criar usuário: " + errorData.message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const listUsers = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    console.log("URL_BASE", URL_BASE);
    console.log("PORT", PORT);
    try {
        const response = await fetch(
            `${URL_BASE}:${PORT}/users`,
            requestOptions
        );
        const result = await response.json();
        console.log("resultado", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getUserById = async (id) => {
    try {
        const response = await fetch(`/users/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Erro ao obter usuário: " + errorData.message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.message === "Failed to fetch") {
            throw new Error(
                "Erro de rede: Nenhuma resposta recebida do servidor"
            );
        } else {
            throw new Error("Erro: " + error.message);
        }
    }
};
