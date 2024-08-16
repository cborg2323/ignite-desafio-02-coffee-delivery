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
                        <div className="itemImageButtons">
                            <img src={coffeeTradicional} alt="" />
                            <div className="coffeNameButtons">
                                <p className="text-regular-m">Expresso Tradicional</p>
                                <div className="coffeeItemButtons">
                                    <CounterBox variant={"checkout"} />
                                    <button className="removeButton"><Trash size={16} color="#8047F8" /> REMOVER</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-bold-m">R$ 9,90</p>
                    </div>
                    <div className="selectedCoffeItem">
                        <div className="itemImageButtons">
                            <img src={coffeeTradicional} alt="" />
                            <div className="coffeNameButtons">
                                <p className="text-regular-m">Latte</p>
                                <div className="coffeeItemButtons">
                                    <CounterBox variant={"checkout"} />
                                    <button className="removeButton"><Trash size={16} color="#8047F8" /> REMOVER</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-bold-m">R$ 19,80</p>
                    </div>
                </div>

                <div className="selectedCoffeesResume">
                    <div className="resumeLine">
                        <p className="text-regular-s">Total de itens</p>
                        <p className="text-regular-m">R$ 29,70</p>
                    </div>
                    <div className="resumeLine">
                        <p className="text-regular-s">Entrega</p>
                        <p className="text-regular-m">R$ 3,50</p>
                    </div>
                    <div className="resumeLine">
                        <p className="text-bold-l">Total</p>
                        <p className="text-bold-l">R$ 33,20</p>
                    </div>
                </div>

                <button className="buttonSubmit">CONFIRMAR PEDIDO</button>
            </div>

        </SelectedCoffeesContainer>
    )
}