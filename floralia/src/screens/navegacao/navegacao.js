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
                title="ResultadoPesquisa"
                onPress={() => navigation.navigate("ResultadoPesquisa")}
            />
            <Button
                title="Localization"
                onPress={() => navigation.navigate("Localization")}
            />
            <Button
                title="ModalEncomenda"
                onPress={() => navigation.navigate("ModalEncomenda")}
            />
            <Button
                title="ModalCancelamento"
                onPress={() => navigation.navigate("ModalCancelamento")}
            />
            <Button
                title="ModalCarrinho"
                onPress={() => navigation.navigate("ModalCarrinho")}
            />
           
        </View>
    )
}