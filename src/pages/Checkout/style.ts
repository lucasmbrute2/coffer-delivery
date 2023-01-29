import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem auto;

    flex-wrap: wrap;
`;

const ShippingInformationTitleBase = styled.h2`
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.12rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-700"]};

    margin-bottom: 0.93rem;
`;

export const ShippingInformationTitle = styled(ShippingInformationTitleBase)``;

export const ShippingInformartionForm = styled.form`
    background-color: ${({ theme }) => theme["white-100"]};
    border-radius: 6px;

    padding: 1.5rem 2.5rem 2.5rem 2.5rem;
`;

export const HeaderFormWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    > span {
        margin-right: 0.5rem;
    }
`;

export const HeaderContainerTitle = styled.div`
    margin-top: 1rem;
    > p {
        font-size: 1rem;
        font-family: "Roboto";
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-700"]};
    }

    > span {
        color: ${({ theme }) => theme["gray-600"]};

        font-family: "Roboto";
        font-size: 0.875rem;
        line-height: 1.3;
    }
`;

export const InputFormSection = styled.section`
    gap: 1rem;
    display: flex;
    flex-direction: column;

    input {
        background: ${({ theme }) => theme["white-200"]};
        border: 1px solid #e6e5e5;
        border-radius: 4px;

        height: 2.625rem;

        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-600"]};

        padding: 0.5rem;

        outline: none;
    }
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
