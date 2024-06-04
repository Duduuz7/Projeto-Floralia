import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
<<<<<<< HEAD
                title="Profile"
                onPress={() => navigation.navigate("Profile")}
            />
            
=======
                title="RecuperarSenha"
                onPress={() => navigation.navigate("recuperarSenha")}
            />
>>>>>>> origin/gui
           
        </View>
    )
}