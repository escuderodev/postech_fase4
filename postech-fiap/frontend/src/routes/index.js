import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../pages/Welcome'
import { SignIn } from '../pages/SignIn'
import { DiscipliniesList } from '../pages/ListDisciplinie'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DiscipliniesList"
                component={DiscipliniesList}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}