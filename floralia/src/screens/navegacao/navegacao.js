import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View style={{marginTop: 0}}>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />
            <Button
                title="Favoritos"
                onPress={() => navigation.navigate("Favoritos")}
            />
            <Button
                title="Carrinho"
                onPress={() => navigation.navigate("Carrinho")}
            />
             <Button
                title="RecuperarSenha"
                onPress={() => navigation.navigate("recuperarSenha")}
            />
            <Button
                title="CodigoRecuperarSenha"
                onPress={() => navigation.navigate("codigoRecuperarSenha")}
            />
           
        </View>
    )
}