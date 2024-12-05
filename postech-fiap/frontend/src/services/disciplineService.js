import { URL_BASE, PORT } from "./fetchConfig";
import { getToken } from "./authService";

export const listDisciplines = async () => {
    console.log("Lista de disciplinas");
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    try {
        const response = await fetch(
            `${URL_BASE}:${PORT}/disciplinies`,
            requestOptions
        );
        const result = await response.json();
        console.log("resultado", result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const getDisciplineById = async (id) => {
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/disciplinies/${id}`, {
            method: "GET",
            redirect: "follow",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

export const createDiscipline = async (discipline) => {
    const token = await getToken();
    console.log("token: ", token);
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/disciplinies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title: discipline }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error("Erro ao criar disciplina: " + errorData.message);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateDiscipline = async (id, discipline) => {
    const token = await getToken();
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/disciplinies/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title: discipline }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                "Erro ao atualizar disciplina: " + errorData.message
            );
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteDiscipline = async (id) => {
    const token = await getToken();
    try {
        const response = await fetch(`${URL_BASE}:${PORT}/disciplinies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error("Failed to delete discipline");
        }

        return response.json();
    } catch (error) {
        console.error("Error deleting discipline:", error);
        throw error;
    }
};
