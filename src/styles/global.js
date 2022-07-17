import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --pink:#ed4450;
    }
`

export const Apps = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`