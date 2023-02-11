import styled from "styled-components";

export const Quantity = styled.p`
    font-family: "Roboto";
    font-size: 1rem;
    line-height: 1.3;
    text-align: center;

    color: ${({ theme }) => theme["gray-800"]};
`;

interface customHeightProps {
    customHeight?: string;
}

export const CoffeCardQuantitySection = styled.div<customHeightProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 4.75rem;
    height: ${({ customHeight }) => customHeight};

    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;
    margin-right: 0.5rem;

    background-color: ${({ theme }) => theme["white-300"]};

    span {
        cursor: pointer;
    }
`;
