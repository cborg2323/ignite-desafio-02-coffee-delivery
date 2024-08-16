import { Minus, Plus } from "phosphor-react";
import { CounterBoxContainer } from "./styles";

export function CounterBox() {
    return (
        <CounterBoxContainer>
            <div className="number-input">
                <Plus size={14} color="#8047F8" weight="bold" />
                <input type="number" />
                <Minus size={14} color="#8047F8" weight="bold" />
            </div>
        </CounterBoxContainer>
    )
}