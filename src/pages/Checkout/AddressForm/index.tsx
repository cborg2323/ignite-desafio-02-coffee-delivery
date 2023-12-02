import { 
            MapPinLine, 
            CurrencyDollar,
            CreditCard,
            Bank,
            Money,
} from 'phosphor-react'
import { AddressFormContainer } from "./styles";

export function AddressForm() {
    return (
        <AddressFormContainer>
            <h1>Complete seu pedido</h1>

            <div className="form-endereco">
                <div className="icone-titulo">
                    <MapPinLine color="#C47F17" size={22} />
                    <div>
                        <span>Endereço de Entrega</span>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </div>

                <div className="input-grid">
                    <input className="grid-200" type="text" placeholder="CEP"/>
                    <input className="grid-560" type="text" placeholder="Rua"/>
                    <input className="grid-200" type="text" placeholder="Número"/>
                    <input className="grid-348" type="text" placeholder="Complemento"/>
                    <input type="text" placeholder="Bairro"/>
                    <input type="text" placeholder="Cidade"/>
                    <input type="text" placeholder="UF"/>
                </div>
            </div>

            <div className="form-pagamento">
                <div className="icone-titulo">
                    <CurrencyDollar color="#8047F8" size={22} />
                    <div>
                        <span>Pagamento</span>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </div>

                <div className="opcoes-pagamento">
                    <button className="selected" >
                        <CreditCard color="#8047F8" size={16} />
                        CARTÃO DE CRÉDITO
                    </button>

                    <button>
                        <Bank color="#8047F8" size={16} />
                        CARTÃO DE DÉBITO
                    </button>

                    <button>
                        <Money color="#8047F8" size={16} />
                        DINHEIRO
                    </button>
                </div>
            </div>
        </AddressFormContainer>
    )
}