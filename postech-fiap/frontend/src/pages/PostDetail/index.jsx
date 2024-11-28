import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles.js";

const PostDetail = ({ route }) => {
    const { post } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    );
};

export default PostDetail;
