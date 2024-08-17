import styled from 'styled-components'

export const SuccessContainer = styled.main`
    display: flex;
    gap: 102px;

    margin: 0 160px;
    justify-content: center;

    .title-l-yellow-dark {
        color: ${props => props.theme['yellow-dark']};
        font-size: 32px;
        font-weight: bolder;
        margin-bottom: 4px;
    }

    .regular-l {
        font-size: 20px;
    }

    .regular-s {
        font-size: 14px;
    }

    .regular-s-bold {
        font-size: 14px;
        font-weight: bold;
    }

    .confirmationInfo {
        margin-top: 80px;
    }

    .introHeading {
        margin-bottom: 40px;
    }

    .confirmationInfoCard {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 40px;

        background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
        border-radius: 6px 36px;
        border: 1px solid transparent;
        
    }

    .iconBackground {
        color: ${props => props.theme['white']};
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
    }

    .mapPinIcon {
        background: ${props => props.theme['purple']};
    }

    .clockIcon {
        background: ${props => props.theme['yellow']};
    }

    .currencyDollarIcon {
        background: ${props => props.theme['yellow-dark']};
    }



    .infoIconTextChunk {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .successDeliveryImage {
        margin-top: 180px;
    }
`