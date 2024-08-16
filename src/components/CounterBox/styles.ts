import styled from "styled-components";

export const CounterBoxContainer = styled.div`
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
`