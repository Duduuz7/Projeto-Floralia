import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />
            <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("recuperarSenha")}
            />
            <Button
                title="AtualizarSenha"
                onPress={() => navigation.navigate("atualizarSenha")}
            />
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("cadastro")}
            />
           
        </View>
    )
}