import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    border-bottom: 1px solid ${({ theme }) => theme["white-300"]};

    padding-bottom: 1.5rem;
    margin-top: 1.5rem;
`;

export const ItemSummary = styled.div`
    > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;

        margin-bottom: 0.5rem;
    }
`;

export const ItemContainer = styled.div`
    display: flex;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 4.5rem;
        height: 2rem;

        padding: 0.5rem;
        gap: 0.55rem;

        border-radius: 6px;
        margin-right: 0.5rem;

        background-color: ${({ theme }) => theme["white-300"]};
    }

    span {
        cursor: pointer;
    }
`;

export const OperationsSymbol = styled.span`
    justify-content: space-between;
`;

export const DeleteItemWrapper = styled.span`
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme["white-300"]};
    border-radius: 6px;
    padding: 0.5rem;
    padding-right: 0.85rem;

    height: 2rem;

    > span {
        margin-top: 0.25rem;
        margin-right: 0.5rem;
    }

    > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.6;

        text-transform: uppercase;
    }
`;

export const ItemPrice = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-600"]};

    margin-top: -2rem;
    width: 75px;

    text-align: center;
`;
