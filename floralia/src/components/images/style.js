import styled from "styled-components";

export const Logo = styled.Image`
    width: 222px;
    height: 78px;
    margin-top: 175px;
`
export const ImageProduct = styled.Image`
    width: 80px;
    height: 80px;
`
export const LogoHeader = styled.Image`
    width: 120px;
    height: 38px;
    
`
// export const LogoHeaderCarrinho = styled.Image`
//     width: 120px;
//     height: 38px;
    
// `

export const LogoHeaderCarrinho = styled(LogoHeader)`
    width: 120px;
    height: 38px;
    position: absolute;
    left: 35%;
`

export const MenuHamburguer = styled.Image`
    width: 40px;
    height: 40px;
`

export const CameraIcon = styled.Image`
    height: 44px;
    width: 44px;
`

export const CardImage = styled.Image`
    width: 110px;
    height: 100%;
    align-self: center;
    border-radius: 2px;
    /* margin-top: 22px; */
`
export const LogoAtualizar = styled.Image`
    width: 260px;
    height: 90px;
    margin-top: 30%;
    margin-bottom: 2px;
`

export const LogoRecuperar = styled.Image`
    width: 260px;
    height: 90px;
    margin-top: 35%;
    margin-bottom: 2px;
`

export const LogoCadastro = styled.Image`
    width: 260px;
    height: 90px;
    margin-top: 15%;
    margin-bottom: 2px;
`
export const CardImageProfile = styled(CardImage)`
    width: 90px;
`