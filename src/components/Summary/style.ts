import styled from "styled-components";

const ShippingInformationTitleBase = styled.h2`
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.12rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-700"]};

    margin-bottom: 0.93rem;
`;

export const CartInformationTitle = styled(ShippingInformationTitleBase)``;

export const SummaryContainer = styled.div`
    background-color: ${({ theme }) => theme["white-100"]};

    padding: calc(2.5rem - 24px) 2.5rem 2.5rem 2.5rem;
    border-radius: 6px 44px;

    min-width: 27rem;
    height: fit-content;
`;

export const PaymentDetailSectionWrapper = styled.section`
    margin-top: 2rem;
`;

const BasePaymentDetailSection = styled.section`
    display: flex;
    justify-content: space-between;
`;

const BaseLabelPrice = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-600"]};

    margin-bottom: 0.75rem;
`;

const BaseEachPrice = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-600"]};
`;

export const PaymentDetailSection = styled(BasePaymentDetailSection)``;
export const LabelPrice = styled(BaseLabelPrice)``;
export const EachPrice = styled(BaseEachPrice)``;

export const TotalPriceLabel = styled.p`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
`;

export const TotalPriceValue = styled.div`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-700"]};
`;

export const SubmitButton = styled.button`
    padding: 0.75rem 0.5rem;

    margin-top: 1.5rem;
    width: 23rem;

    background: ${({ theme }) => theme["yellow-300"]};
    border: none;

    border-radius: 6px;
    cursor: pointer;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rmem;
    line-height: 1.6;
    text-transform: uppercase;

    color: ${({ theme }) => theme.white};
`;
