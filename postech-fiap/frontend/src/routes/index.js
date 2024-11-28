import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../pages/Welcome";
import { LogIn } from "../pages/Login";
import { DiscipliniesList } from "../pages/ListDisciplinie";
import { DisciplineForm } from "../pages/DisciplineForm";
import { ListAluno } from "../pages/ListAluno";
import { ListProfessor } from "../pages/ListProfessor";
import { ListUser } from "../pages/ListUser";
import { SingUp } from "../pages/SingUp";
import { PostForm } from "../pages/PostForm";
import { ListPostAdm } from "../pages/ListPostAdm";
import PostDetail from "../pages/PostDetail";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DiscipliniesList"
                component={DiscipliniesList}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="DisciplineForm"
                component={DisciplineForm}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="ListAluno"
                component={ListAluno}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="ListProfessor"
                component={ListProfessor}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="ListUser"
                component={ListUser}
                options={{ headerShown: true }}
            />

            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="PostForm"
                component={PostForm}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="ListPostAdm"
                component={ListPostAdm}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PostDetail"
                component={PostDetail}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    );
}
