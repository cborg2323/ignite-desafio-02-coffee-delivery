import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo.png'

export function Header() {
    const cartHasItems = true

    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="Logo Coffee Delivery" />

            <div className="buttons-left">
                <div className="location">
                    <MapPin size={24} color="#8047F8" weight="fill" />
                    <span>Porto Alegre, RS</span>
                </div>
                <div>
                    {(cartHasItems ?
                        <>
                            <button>
                                <ShoppingCart size={24} color="#C47F17" weight="fill" />
                            </button>
                            <div className="quantityItemsCart">
                                <span>3</span>
                            </div>
                        </>
                        :
                        <button>
                            <ShoppingCart size={24} color="#C47F17" weight="fill" />
                        </button>
                    )}
                </div>
            </div>

        </HeaderContainer>
    )
}