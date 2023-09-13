

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Text, VStack, Button } from "native-base";
import { secoes } from './utils/EntradaTexto';
import EntradaTxtInput from './Componente/EntradaTxtInput';
import { useState } from 'react';


export default function Cadastro() {
    const [num, setNum] = useState(0)

    function avancarSecao() {
        if (num < secoes.length - 1) {
            setNum(num + 1)
        } else {

        }
    }
    function voltarSecao() {
        if (num > 0) {
            setNum(num - 1)

        }
    }
    return (
        <NativeBaseProvider >
            <StatusBar style="auto" backgroundColor='gray' />

            <VStack flex={1} mt={10}>
                <Box p={2}>
                    {secoes[num]?.EntradaTxt.map(entrada => (
                        <EntradaTxtInput key={entrada.id} {...entrada} />
                    ))}
                </Box>

                <Box p={2}>

                    {num < 1 && <Button
                        mt={5}
                        onPress={() => avancarSecao()} >Avançar
                    </Button>}

                    {num > 0 && <Button onPress={() => voltarSecao()} mt={5}>Logar
                    </Button>}

                    {num > 0 && <Button bgColor='gray.400' onPress={() => voltarSecao()} mt={5}>Voltar
                    </Button>}




                </Box>




            </VStack>

        </NativeBaseProvider>
    );
}

