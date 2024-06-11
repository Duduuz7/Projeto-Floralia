import styled from "styled-components";

export const Logo = styled.Image`
    width: 222px;
    height: 78px;
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
    border-radius: 0px;
    border-right: 1px;
    border-color: #1C4B00;
    align-self: center;
    /* margin-top: 22px; */
`