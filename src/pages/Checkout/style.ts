import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem auto;

    flex-wrap: wrap;
`;

export const BillingSectionWrapper = styled.section`
    margin-top: 0.75rem;

    background-color: ${({ theme }) => theme["white-100"]};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    border: none;

    padding: 2.5rem;
`;

export const BillingSectionHeader = styled.header`
    display: flex;

    > span {
        margin-right: 0.5rem;
    }
`;

export const BillingSectionHeaderTitle = styled.div`
    > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-700"]};
    }

    > span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-600"]};
    }
`;

export const PaymentInstrumentSection = styled.section`
    display: flex;
    margin-top: 2rem;
    gap: 0.75rem;
`;

export const PaymentInstrumentWrapper = styled.div`
    display: flex;
    padding: 1rem 1.81rem 1rem 1rem;

    background-color: ${({ theme }) => theme["white-300"]};
    border-radius: 6px;

    > span {
        margin-right: 0.81rem;
    }

    > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.6;

        text-transform: uppercase;

        ${({ theme }) => theme["gray-600"]}
    }
`;
