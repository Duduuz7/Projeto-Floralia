
import { InputLinhaVerde } from "../input/style";
import { ContainerSecure, EyeContainer } from "./style";

import Feather from "@expo/vector-icons/Feather";

{
    /* <Feather name="eye" size={24} color="black" /> */
}
{
    /* <Feather name="eye-off" size={24} color="black" /> */
}



export function InputLinha({
    placeholder,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    placeholderTextColor,
    editable = true,
    secureTextEntry = false
}) {
    return (
        <InputLinhaVerde
            editable={editable}
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor}
            maxLength={maxLength}
            value={fieldValue}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    )
}

export function InputLinhaSenha({
    onPress,
    placeholder,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    placeholderTextColor,
    editable = true,
    secureTextEntry = false

}) {
    return (
        <ContainerSecure>
            <EyeContainer onPress={onPress}>
                {secureTextEntry ? <Feather name="eye" size={24} color="#1C4B00" /> : <Feather name="eye-off" size={24} color="#1C4B00" />}
            </EyeContainer>

            <InputLinhaVerde
                editable={editable}
                placeholder={placeholder}
                keyboardType={keyboardType}
                placeholderTextColor={placeholderTextColor}
                maxLength={maxLength}
                value={fieldValue}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />

        </ContainerSecure>
    )
}