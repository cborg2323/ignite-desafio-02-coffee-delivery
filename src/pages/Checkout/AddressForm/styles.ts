import styled from 'styled-components'

export const AddressFormContainer = styled.div`
    h1 {
        font-size: 18px;
        margin-top: 40px;
    }

    .form-endereco {
        margin-top: 15px;
        background: ${props => props.theme['base-card']};
        width: 640px;
        padding: 40px;

        .icone-titulo {
            display: flex;
            gap: 8px;
            margin-bottom: 32px;

            span {
                font-size: 16px;
                color: ${props => props.theme['base-subtitle']};
            }

            p {
                font-size: 14px;
            }
        }

        .input-grid {
            display: grid;
            gap: 16px 12px;
            grid-template-columns: 200px 276px 60px;

            .grid-200 {
                grid-column: 1/2;
            }

            .grid-560 {
                grid-column: 1/4;
            }

            .grid-348 {
                grid-column: 2/4;
            }

            input {
                height: 42px;
                padding: 12px;

                color: ${props => props.theme['base-text']};
                font-size: 14px;

                border-radius: 4px;
                border: 1px solid ${props => props.theme['base-button']};
                background: ${props => props.theme['base-input']};
            }

            input:focus {
                outline: 1px solid ${props => props.theme['yellow-dark']};
            }

            input::placeholder {
                color: ${props => props.theme['base-label']};
            }
        }

        
    }

    .form-pagamento {
        margin-top: 15px;
        background: ${props => props.theme['base-card']};
        width: 640px;
        padding: 40px;

        .icone-titulo {
            display: flex;
            gap: 8px;
            margin-bottom: 32px;

            span {
                font-size: 16px;
                color: ${props => props.theme['base-subtitle']};
            }

            p {
                font-size: 14px;
            }
        }

        
    }
    


`