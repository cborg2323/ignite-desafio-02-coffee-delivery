import { AddressForm } from "./AddressForm";
import { SelectedCoffees } from "./SelectedCoffees";

import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <AddressForm />
            <SelectedCoffees />
        </CheckoutContainer>

    )
}