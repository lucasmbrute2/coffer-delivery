import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`;

const BaseCustomerInfoHeader = styled.div`
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
`;

export const CartWrapper = styled.div`
    display: flex;
`;

export const CurrentLocation = styled(BaseCustomerInfoHeader)`
    background-color: ${({ theme }) => theme["purple-500"]};
    color: ${({ theme }) => theme["purple-700"]};

    font-size: 0.875rem;
    line-height: 1.3;

    display: flex;
    align-items: center;

    span {
        margin-left: 0.5rem;
    }
`;

export const Cart = styled(BaseCustomerInfoHeader)`
    background-color: ${({ theme }) => theme["yellow-700"]};
    margin-left: 0.75rem;
`;
