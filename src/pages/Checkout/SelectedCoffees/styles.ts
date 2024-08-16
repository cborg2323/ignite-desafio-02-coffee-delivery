import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`

    h1 {
        font-size: 18px;
        margin-top: 40px;
    }

    .selectedCoffeesCard {
        margin-top: 15px;
        background: ${props => props.theme['base-card']};
        padding: 40px;
        border-radius: 6px 44px;
        width: 448px;
    }

    .selectedCoffeesItems {
        display: flex;
        flex-direction: column;
        gap: 48px;

        margin-bottom: 48px;
    }

    .selectedCoffeItem {
        display: flex;
        flex-direction: row;

        padding: 8px 4px;
    }

    img {
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }

    .coffeNameButtons {
        margin-right: 50px;
    }

    .coffeeItemButtons {
        display: flex;
        gap: 8px;
        margin-top: 8px;
    }

    button {
        width: 91px;
        height: 32px;
        background: ${props => props.theme['base-button']};
        border: none;
        border-radius: 6px;
        font-size: 12px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    button:hover {
        background: ${props => props.theme['base-hover']};
        transition: 0.3s;
        cursor: pointer;
    }

`