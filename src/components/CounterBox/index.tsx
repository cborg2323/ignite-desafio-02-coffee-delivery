import { Minus, Plus } from "phosphor-react";
import { CounterBoxContainer } from "./styles";

interface CheckoutProps {
    variant?: string;
}

export function CounterBox(props: CheckoutProps) {
    return (
        <CounterBoxContainer variant={props.variant}>
            <div className="number-input">
                <button className="buttonController">
                    <Plus size={14} color="#8047F8" weight="bold" />
                </button>
                <input type="number" />
                <button className="buttonController">
                    <Minus size={14} color="#8047F8" weight="bold" />
                </button>
            </div>
        </CounterBoxContainer>
    )
}