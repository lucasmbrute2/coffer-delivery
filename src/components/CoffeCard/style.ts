import styled from "styled-components";

export const CoffeCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    width: 16rem;
    /* height: 19.375rem; */

    background-color: ${({ theme }) => theme["white-100"]};
    border-radius: 6px 36px;

    > h3 {
        font-family: "Baloo 2";
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.3;

        margin-bottom: 0.5rem;

        color: ${({ theme }) => theme["gray-700"]};
    }

    > span {
        font-size: 0.875rem;
        font-family: Roboto;
        line-height: 1.3;

        text-align: center;

        margin-bottom: 2rem;

        color: ${({ theme }) => theme["gray-400"]};
    }
`;
export const CoffeLabelContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
`;

export const CoffeLabel = styled.p`
    padding: 0.25rem 0.5rem;

    background-color: ${({ theme }) => theme["yellow-700"]};
    color: ${({ theme }) => theme["yellow-100"]};

    text-transform: uppercase;
    text-align: center;

    border-radius: 100px;

    font-size: 0.625rem;
    font-family: "Roboto";
    font-weight: 700;
    line-height: 1.3;

    margin: 1rem 0 1.25rem 0;
`;

export const CoffeCardPriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const CoffeCardPriceSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.43rem;

    > p {
        font-family: "Roboto";
        font-size: 0.875rem;
        line-height: 1.3;

        text-align: "right";

        color: ${({ theme }) => theme["gray-600"]};
        display: block;

        margin-right: 0.15rem;
    }

    & :nth-child(n + 2) {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 1.5rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-600"]};
    }
`;

export const CoffeCardQuantityWrapper = styled.div`
    display: flex;

    > p {
        background-color: ${({ theme }) => theme["purple-700"]};
        padding: 0.5rem;

        border-radius: 6px;
        cursor: pointer;
    }
`;

export const CoffeCardQuantitySection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 4.75rem;
    align-items: center;

    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;
    margin-right: 0.5rem;

    background-color: ${({ theme }) => theme["white-300"]};

    span {
        cursor: pointer;
    }
`;

export const Quantity = styled.p`
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;

    color: ${({ theme }) => theme["gray-800"]};
`;
