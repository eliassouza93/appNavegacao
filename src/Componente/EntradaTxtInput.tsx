import { Text, FormControl, Input } from 'native-base'
interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
    value?: string
    onChangeText?: (text: string) => void


}
export default function EntradaTxtInput({ label,
    placeholder,
    secureTextEntry = false,
    value,
    onChangeText

}: InputProps): JSX.Element {
    return (
        <FormControl>

            <Input
            mt={4}
                placeholder={placeholder}
                size='lg'
                w='100%'
                borderRadius='lg'
                bgColor='gray.100'
                shadow={3}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}

            />


        </FormControl>
    )
}