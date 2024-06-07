import { View, Button } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
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