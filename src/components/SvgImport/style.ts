import styled from "styled-components";

interface CoffeImageProps {
    customWidth: string;
    customHeight: string;
    customMargin: string;
}

export const CoffeImage = styled.img<CoffeImageProps>`
    margin-top: ${({ customMargin }) => customMargin};

    width: ${({ customWidth }) => customWidth};
    height: ${({ customHeight }) => customHeight};
`;
