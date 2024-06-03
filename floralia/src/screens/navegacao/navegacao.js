import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("recuperarSenha")}
            />
           
        </View>
    )
}