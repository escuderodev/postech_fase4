import React from "react";
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
} from "react-native";
//import { PostList } from "../../data/post.js";
import { PostItem } from "../../components/PostItem/PostItem.jsx";
import { styles } from "./styles.js";
import { useState, useEffect } from "react";
import { listPosts } from "../../services/postService.js";

export function ListPostAdm({ navigation }) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await listPosts();
            setPostList(data);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Posts - ADM :</Text>
            </View>

            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.push("PostForm");
                    }}
                >
                    <Text style={styles.buttonText}>Novo Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.push("DiscipliniesList");
                    }}
                >
                    <Text style={styles.buttonText}>Lista de Disciplinas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.push("ListAluno");
                    }}
                >
                    <Text style={styles.buttonText}>Lista de Alunos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.push("ListProfessor");
                    }}
                >
                    <Text style={styles.buttonText}>Lista de Profesores</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.scrollViewContainer}>
                <FlatList
                    data={postList}
                    renderItem={({ item }) => (
                        <PostItem
                            post={item}
                            onPress={() =>
                                navigation.navigate("PostDetail", {
                                    post: item,
                                })
                            }
                        />
                    )}
                    keyExtractor={(item) => item._id}
                />
            </View>
        </>
    );
}
