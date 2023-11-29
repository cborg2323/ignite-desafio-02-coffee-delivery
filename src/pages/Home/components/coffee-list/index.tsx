import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { CoffeeListContainer } from "./styles";

import coffeeTradicional from '../../../../assets/produtos/expresso.png'

export function CoffeeList() {
    return(
        <CoffeeListContainer>
            <div className="title-filters">
                <h2>Nossos cafés</h2>
                <div className="filters">
                    <button className="tag">TRADICIONAL</button>
                    <button className="tag">ESPECIAL</button>
                    <button className="tag">COM LEITE</button>
                    <button className="tag">ALCOÓLICO</button>
                    <button className="tag">GELADO</button>
                </div>
            </div>

            <div className="coffee-list">

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

                <div className="coffee-card">
                    <img src={coffeeTradicional} alt="" />

                    <div className="tags-list">
                        <div className="tag">
                            <span>TRADICIONAL</span>
                        </div>
                        <div className="tag">
                            <span>ALCOÓLICO</span>
                        </div>
                        <div className="tag">
                            <span>GELADO</span>
                        </div>
                    </div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>

                    <div className="price-form">
                        <span>R$ 9,90</span>
                        <div className="form-icon" >
                            <div className="number-input">
                                <Plus size={14} color="#8047F8" weight="bold"/>
                                <input type="number"  />
                                <Minus size={14} color="#8047F8" weight="bold"/>
                            </div>
                            <div className="shopping-cart-background">
                                <ShoppingCart size={22} color="#FFF" weight="fill"/>
                            </div> 
                        </div>                
                    </div>
                </div>

            </div>

        </CoffeeListContainer>
    )
}