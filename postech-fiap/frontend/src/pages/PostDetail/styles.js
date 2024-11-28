import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333333",
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e5bf3c",
        marginBottom: 5, // Aumente um pouco o espaço abaixo do título
        paddingTop: 30, // Ajuste o valor de paddingTop para mais espaço acima do título
        width: "80%",
    },
    content: {
        flex: 1,
        marginLeft: 16,
        padding: 15,
        color: "#e5bf3c",
    },
});
