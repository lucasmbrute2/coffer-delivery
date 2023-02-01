import styled from "styled-components";

export const CheckoutConfirmationContainer = styled.div`
    margin-top: 5rem;

    > h2 {
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 1.3;

        color: ${({ theme }) => theme["yellow-100"]};
    }

    > p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.3;
        font-stretch: 100;

        color: ${({ theme }) => theme["gray-700"]};
    }
`;

export const ContentContainer = styled.div`
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > div {
        padding: 0.5rem 2.5rem 2.5rem 2.5rem;
        margin-right: 6.3rem;
        width: 32rem;
        height: fit-content;

        border-radius: 6px 36px;

        background: linear-gradient(
                    ${({ theme }) => theme["white-background"]},
                    ${({ theme }) => theme["white-background"]}
                )
                padding-box,
            linear-gradient(
                    to right,
                    ${({ theme }) => theme["yellow-300"]},
                    ${({ theme }) => theme["purple-100"]}
                )
                border-box;

        border: 1px solid transparent;
    }
`;

const colors = {
    yellowLight: "yellow-300",
    yellowDark: "yellow-100",
    purple: "purple-100",
} as const;

type backgroundIconsColors = keyof typeof colors;

interface BackgroundIconProps {
    backgroundColorIcon: backgroundIconsColors;
}

export const CheckoutDetailsWrapper = styled.div<BackgroundIconProps>`
    display: flex;
    align-items: center;
    margin-top: 2rem;

    > span {
        background-color: ${({ theme, backgroundColorIcon }) =>
            theme[colors[backgroundColorIcon]]};
        width: 2rem;
        height: 2rem;

        border-radius: 1000px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 0.75rem;
    }
`;
