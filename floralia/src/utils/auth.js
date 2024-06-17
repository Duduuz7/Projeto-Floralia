import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { encode, decode } from "base-64";
import { useNavigation } from '@react-navigation/native';

if( !global.atob ){
    global.atob = encode
}

if( !global.btoa ){
    global.atob = decode
}

export const Logout = async () => {

    await AsyncStorage.removeItem("token");

    console.log("Token apagado");

    // navigation.replace("Login")

}


export const tokenClean = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token

    if (token === null) {
        return null;
    }
    return token;
}

export const userDecodeToken = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token
    if (token === null) {
        return null;
    }

    //Decodifica o token recebido
    const decoded = await jwtDecode(token);

    return {
        name: decoded.name,
        email: decoded.email,
        user: decoded.jti
    }
}


