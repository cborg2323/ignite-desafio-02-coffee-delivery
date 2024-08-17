import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'

import { SuccessContainer } from './styles'

import successDeliveryPicture from '../../assets/success.png'

export function Success() {
    return (
        <SuccessContainer>
            <div className="confirmationInfo">
                <div className="introHeading">
                    <h1 className="title-l-yellow-dark">Uhu! Pedido confirmado</h1>
                    <p className="regular-l">Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <div className="confirmationInfoCard">
                    <div className="infoIconTextChunk">
                        <div className="mapPinIcon iconBackground">
                            <MapPin size={16} weight="fill" />
                        </div>
                        <div className="infoTextChunk">
                            <p className="regular-s">Entrega em <span className="regular-s-bold">Rua João Daniel Martinelli, 102</span></p>
                            <p className="regular-s">Farrapos - Porto alegre, RS</p>
                        </div>
                    </div>
                    <div className="infoIconTextChunk">
                        <div className="clockIcon iconBackground">
                            <Clock size={16} weight="fill" />
                        </div>
                        <div className="infoTextChunk">
                            <p className="regular-s">Previsão de entrega</p>
                            <p className="regular-s-bold">20 min - 30 min</p>
                        </div>
                    </div>
                    <div className="infoIconTextChunk">
                        <div className="currencyDollarIcon iconBackground">
                            <CurrencyDollar size={16} />
                        </div>
                        <div className="infoTextChunk">
                            <p className="regular-s">Pagamento na entrega</p>
                            <p className="regular-s-bold">Cartão de Crédito</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="successDeliveryImage" src={successDeliveryPicture} alt="" />
        </SuccessContainer>
    )
}