import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    max-width: 1120px;
    margin: auto;

    .title-filters {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 32px;
        gap: 520px;

        h2 {
            font-size: 32px;
        }

        .filters {
            display: flex;
            gap: 8px;
        }

        .tag {
            font-size: 10px;
            font-weight: bold;
        }

        button {
            color: ${props => props.theme['yellow-dark']};
            background: ${props => props.theme['white']};
            padding: 6px 6px;

            border: 1px solid ${props => props.theme['yellow']};
            border-radius: 100px;

            cursor: pointer;
        }
    }

    .coffee-list {
        margin-top: 54px;

        .coffee-card {
            display: flex;
            flex-direction: column;
            align-items: center;

            max-width: 256px;
            padding: 0 20px;
            background: ${props => props.theme['base-card']};
            border-radius: 6px 36px;

            .tags-list {
                display: flex;
                gap: 4px;

                margin-bottom: 16px;
            }

            .tag {
                background: ${props => props.theme['yellow-light']};

                border-radius: 100px;
                padding: 4px 8px;
                display: flex;

                span {
                    font-size: 10px;
                    font-weight: bold;
                    color: ${props => props.theme['yellow-dark']};
                }
                
            }

            h3 {
                font-size: 20px;

                margin-bottom: 8px;
            }

            img {
                width: 120px;
                height: 120px;
                margin-top: -20px;
                margin-bottom: 12px;
            }

            p {
                font-size: 14px;
                text-align: center;
                color: ${props => props.theme['base-label']};
                margin-bottom: 33px;
            }

            .price-form {
                display: flex;
                align-items: center;
                gap: 23px;

                margin-bottom: 20px;

                .form-icon {
                    display: flex;
                    gap: 8px;
                }


                .number-input {
                    background: ${props => props.theme['base-button']};
                    height: 38px;
                    padding: 0 8px;
                    gap: 4px;

                    display: flex;
                    align-items: center;
                    border-radius: 6px;

                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                    }

                    input {
                        border: 0;
                        background: ${props => props.theme['base-button']};
                        width: 20px;
                        font-size: 20px;

                        text-align: center;
                    }
                }

                .shopping-cart-background {
                    background: ${props => props.theme['purple-dark']};
                    padding: 8px;
                    border-radius: 6px;

                    display: flex;
                    align-items: center;

                    cursor: pointer;
                    transition: 0.1;
                }

                .shopping-cart-background:hover {
                    background: ${props => props.theme['purple']};
                }


            }
        }
    }

`