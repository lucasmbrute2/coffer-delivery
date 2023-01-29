import styled from "styled-components";

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
