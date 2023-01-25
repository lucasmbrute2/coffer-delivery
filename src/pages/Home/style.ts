import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;

    margin-top: 5.875rem;
`;

export const SummarySection = styled.div`
    max-width: 36.75rem;
    margin-right: 3.5rem;

    > p {
        font-family: "Baloo 2";
        font-weight: 800;
        font-size: 3rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["gray-800"]};
    }

    > span {
        font-family: Roboto;
        font-weight: 400;
        line-height: 1.3;
        font-size: 1.25rem;

        color: ${({ theme }) => theme["gray-700"]};

        display: block;
        margin: 1rem 0 4.125rem 0;
    }
`;

export const BenefitsSectionContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    div {
        display: flex;
        align-items: center;
    }
`;

export const BenefitsText = styled.p`
    margin-left: 0.75rem;

    font-family: "Roboto";
    font-size: 1rem;
    font-style: normal;
    line-height: 1.3;

    color: ${({ theme }) => theme["gray-600"]};
`;

const ICON_COLORS = {
    yellow: "yellow-100",
    ["yellow-light"]: "yellow-300",
    purple: "purple-100",
    gray: "gray-600",
} as const;

interface IconColorsProps {
    iconBackGroundColor: keyof typeof ICON_COLORS;
}

export const BenefitsIcon = styled.p<IconColorsProps>`
    background-color: ${({ theme, iconBackGroundColor }) =>
        theme[ICON_COLORS[iconBackGroundColor]]};
    border-radius: 50%;

    width: 33px;
    height: 33px;

    display: flex;
    justify-content: center;
    align-items: center;
`;
