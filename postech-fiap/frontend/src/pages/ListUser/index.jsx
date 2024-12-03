import React, { useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
//import { UserList } from "../../data/user.js";
import { UserItem } from "../../components/UserItem/UserItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles.js";
import { listUsers } from "../../services/userService.js";
//import { user } from "../../../../backend/src/models/User.js";

export function ListUser() {
    const navigation = useNavigation();
    const [UserList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await listUsers();
            console.log(data);
            setUserList(data);
        };
        fetchUsers();
    }, []);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Usuários:</Text>
            </View>
            <View style={styles.scrollViewContainer}>
                <ScrollView style={styles.scrollView}>
                    {UserList.map((item) => (
                        <UserItem key={item._id} {...item} />
                    ))}
                </ScrollView>
            </View>
        </>
    );
}
