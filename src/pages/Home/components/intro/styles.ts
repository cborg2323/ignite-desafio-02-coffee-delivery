import styled from "styled-components";

import backgroundIntroImage from '../../../../assets/intro-background.png'

export const IntroContainer = styled.main`
    display: flex;
    justify-content: center;
    gap: 56px;
    padding-top: 92px;

    background-image: url(${backgroundIntroImage});

    div.texto-esquerda {
        display: flex;
        flex-direction: column;
        gap: 66px;

        margin-bottom: 108px;

        section {
            max-width: 588px;
        }

        h1 {
            margin-bottom: 16px;
            font-size: 48px;
        }

        .subtitle {
            color: ${props => props.theme['base-subtitle']};
            font-size: 20px;
        }

        .topicos {
            display: flex;
            gap: 40px;
        }

        .sub-topicos {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .icon-text {
            display: flex;
            align-items: center;
            gap: 12px;

            span {
                font-size: 16px;
            }
        }

        .background-item {
            color: ${props => props.theme['white']};
            height: 32px;
            width: 32px;
            border-radius: 1000px;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .background-cart {
            background: ${props => props.theme['yellow-dark']};
        }

        .background-timer {
            background: ${props => props.theme['yellow']};
        }

        .background-package {
            background: ${props => props.theme['base-text']};
        }

        .background-coffee {
            background: ${props => props.theme['purple']};
        }
    
    
    }

    img {
        height: 360px;
    }
    

`