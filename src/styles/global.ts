import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: ${props => props.theme['background']};
    }

    h1, h2, h3 {
        font-family: 'Baloo 2', sans-serif;
        color: ${props => props.theme['base-title']};
    }

    p, span {
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-text']};
    }

`