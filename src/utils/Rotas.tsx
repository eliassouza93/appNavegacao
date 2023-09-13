
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Principal from '../Principal'
import Cadastro from '../Cadastro'

const Tab = createNativeStackNavigator()

export default function Rotas () {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Principal' component={Principal} options={{ headerShown: false }} />
                <Tab.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
