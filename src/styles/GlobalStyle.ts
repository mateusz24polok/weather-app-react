import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.colors.contours}
    }

    *, ::after, ::before{
        box-sizing: inherit;
    }

    body{
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
`;
