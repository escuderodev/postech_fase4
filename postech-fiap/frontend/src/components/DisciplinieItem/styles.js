import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    content: {
        flex: 1,
        marginLeft: 16,
        padding: 16,
        backgroundColor: "#e5bf3c",
        borderRadius: 10
    },
    id: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    createdAt: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },

});