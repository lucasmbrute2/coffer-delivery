import styled from "styled-components";

export const Cart = styled.div`
    background-color: ${({ theme }) => theme["yellow-700"]};
    margin-left: 0.75rem;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;

    position: relative;

    > span {
        position: absolute;
        top: -0.5rem;

        width: 1.25rem;
        height: 1.25rem;

        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme["yellow-100"]};

        text-align: center;
        border-radius: 50%;

        font-family: "Roboto";
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1.7;
        letter-spacing: -0.06em;
    }
`;
