import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        font-family: AppleSDGothicNeo;
        font-size:14px;
        color: black;
        max-width: 40rem;
        margin: auto;
        padding: 32px 24px;
    }
`;

export default GlobalStyles;
