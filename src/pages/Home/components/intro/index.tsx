import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { IntroContainer } from "./styles";

import homeIntro from '../../../../assets/home-intro.png'

export function Intro() {
    return (
        <IntroContainer>
            <div className="texto-esquerda">
                <section>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p className="subtitle">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                </section>

                <div className="topicos">
                    <div className="sub-topicos">
                        <div className="icon-text" >
                            <div className="background-cart background-item">
                                <ShoppingCart size={16} weight="fill" />
                            </div> 
                            <span>Compra simples e segura</span>
                        </div>
                        <div className="icon-text" >
                            <div className="background-timer background-item">
                                <Timer size={16} weight="fill" />
                            </div> 
                            <span>Entrega rápida e rastreada</span>
                        </div>
                    </div>

                    <div className="sub-topicos">
                        <div className="icon-text" >
                            <div className="background-package background-item">
                                <Package size={16} weight="fill" /> 
                            </div>
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div className="icon-text" >
                            <div className="background-coffee background-item">
                                <Coffee size={16} weight="fill" />
                            </div>
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <img src={homeIntro} alt="" />
            
        </IntroContainer>
    )
}