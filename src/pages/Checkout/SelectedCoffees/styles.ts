import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`

    .text-regular-s {
        font-size: 14px;
    }

    .text-regular-m {
        font-size: 16px;
    }

    .text-bold-l {
        font-size: 20px;
        font-weight: bold;
    }

    .text-bold-m {
        font-size: 16px;
        font-weight: bold;
    }

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

    .itemImageButtons {
        display: flex;
    }

    .selectedCoffeItem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 8px 4px;
    }

    img {
        width: 64px;
        height: 64px;
        margin-right: 20px;
    }

    .coffeeItemButtons {
        display: flex;
        gap: 8px;
        margin-top: 8px;

        .removeButton {
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

        .removeButton:hover {
            background: ${props => props.theme['base-hover']};
            transition: 0.3s;
            cursor: pointer;
        }
    }

    .selectedCoffeesResume {
        display: flex;
        flex-direction: column;
        gap: 12px;

        margin-bottom: 24px;
    }

    .resumeLine {
        display: flex;
        justify-content: space-between;
    }

    .buttonSubmit {
        background: ${props => props.theme['yellow']};
        width: 368px;
        height: 46px;
        border: none;
        border-radius: 6px;

        color: ${props => props.theme['white']};
        font-size: 14px;
        font-weight: bold;
        line-height: 160%;
    }

    .buttonSubmit:hover {
        background: ${props => props.theme['yellow-dark']};
        transition: 0.3s;
        cursor: pointer;
    }

`