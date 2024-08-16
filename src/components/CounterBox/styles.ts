import styled from "styled-components";

interface CheckoutProps {
    variant?: string;
}

export const CounterBoxContainer = styled.div<CheckoutProps>`
    .number-input {
                    background: ${props => props.theme['base-button']};
                    /* height: 38px; */
                    height: ${props =>
        props.variant === "checkout"
            ? "32px"
            : "38px"
    };
                    padding: 0 8px;
                    gap: 4px;

                    display: flex;
                    align-items: center;
                    border-radius: 6px;

                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                    }

                    .buttonController {
                        width: 14px;
                        height: 14px;
                        border: none;
                        background: ${props => props.theme['base-button']};
                    }

                    .buttonController:hover {
                        cursor: pointer;
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