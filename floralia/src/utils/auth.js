import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";


export const userDecodeToken = async () => {
    const token = JSON.parse(await AsyncStorage.getItem("token")).token;
    if (token === null) {
        return null
    }
    const decoded = jwtDecode( token )
    return {
        name: decoded.name,
        email: decoded.email,
        jti: decoded.jti,
        token: token
    }
}