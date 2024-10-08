import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 104px;
    padding: 0 160px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        align-items: center;
    }

    div.buttons-left {
        gap: 12px;
    }

    .quantityItemsCart {
        width: 20px;
        height: 20px;
        padding: 2px;
        margin-top: -26.5px;
        margin-left: -8px;
        border-radius: 1000px;
        background: ${props => props.theme['yellow-dark']};
        display: flex;
        justify-content: center;
    }

    .quantityItemsCart span {
        color: ${props => props.theme['white']};
        font-weight: bold;
        font-size: 14px;
    }

    div.location {
        height: 38px;
        padding: 0 8px;
        border-radius: 6px;

        background: ${props => props.theme['purple-light']};
        color: ${props => props.theme['purple']};
    }

    span {
        font-size: 14px;
    }

    div button {
        height: 38px;
        width: 38px;
        border-radius: 6px;

        background: ${props => props.theme['yellow-light']};
        border: 0;
    }

    div button:hover {
        cursor: pointer;
    }


`

