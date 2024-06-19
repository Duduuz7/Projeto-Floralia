import styled from "styled-components";

export const LastPhoto = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`
export const  Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    background-color: #496BBA;
    border: 1px #496BBA;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 12px 8px 12px 8px ;
`
export const ButtonTitleCamera = styled.Text`
    color: #FAFAFA;
    font-family: 'MontserratAlternates_700Bold';
    font-size: 14px;
`
export const ButtonAppointmentSecondary = styled(Button)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const ButtonSecondaryText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
    /* margin-top: 16px; */
`

export const ButtonModalAppointment = styled(Button)`
    width: 80%;
    margin-top: 30px;
`
export const Title = styled.Text`
    font-size: 20px;
    font-family:'MontserratAlternates_600SemiBold';
    color: #FFFFFF;
    margin-bottom: 5px;
`