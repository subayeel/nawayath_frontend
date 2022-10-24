import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    background: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    margin: 0;
    box-sizing: border-box;
}
`

export const CenterFlexContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`

export const MainContainer = styled.div`
max-width: 1140px;
margin: 0 auto;
`

export const MainWrapper = styled(CenterFlexContainer)`

`

export default GlobalStyle;
