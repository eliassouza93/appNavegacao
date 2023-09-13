import { NativeBaseProvider, Box, Text, VStack, Button, Image, ScrollView, Link } from "native-base";
import Logo from './assets/alien.png'




export default function Principal({ navigation }: any) {


    return (
        <ScrollView flex={1}>
            <VStack>
                <Image source={Logo} alt="alien" mt={2} resizeMode="contain" width={70} height={70} alignSelf='center' />
                <Box>
                    <Text textAlign='center' fontWeight='bold' mt='8' fontSize='21'>Bem Vindo ao AlienApp</Text>
                    <Text textAlign='center'>Você já é cadastrado?  </Text>
                    
                </Box>

                <Button mt={10} onPress={() => navigation.navigate('Cadastro')}>Cadastro</Button>


            </VStack>
        </ScrollView>


    );
}

