import { Trash } from 'phosphor-react'

import { CounterBox } from '../../../components/CounterBox'
import { SelectedCoffeesContainer } from './styles'

import coffeeTradicional from '../../../assets/produtos/expresso.png'

export function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <h1>Cafés selecionados</h1>
            <div className="selectedCoffeesCard">
                <div className="selectedCoffeesItems">
                    <div className="selectedCoffeItem">
                        <img src={coffeeTradicional} alt="" />
                        <div className="coffeNameButtons">
                            <p>Expresso Tradicional</p>
                            <div className="coffeeItemButtons">
                                <CounterBox />
                                <button><Trash size={16} color="#8047F8" /> REMOVER</button>
                            </div>
                        </div>
                        <p>R$ 9,90</p>
                    </div>
                    <div className="selectedCoffeItem">
                        <img src={coffeeTradicional} alt="" />
                        <div className="coffeNameButtons">
                            <p>Latte</p>
                            <div className="coffeeItemButtons">
                                <CounterBox />
                                <button><Trash size={16} color="#8047F8" /> REMOVER</button>
                            </div>
                        </div>
                        <p>R$ 19,80</p>
                    </div>
                </div>

                <div className="selectedCoffeesResume">
                    <div>
                        <p>Total de itens</p>
                        <p>R$ 29,70</p>
                    </div>
                    <div>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>R$ 33,20</p>
                    </div>
                </div>

                <button>CONFIRMAR PEDIDO</button>
            </div>

        </SelectedCoffeesContainer>
    )
}