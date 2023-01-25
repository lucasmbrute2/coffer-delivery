import { ShoppingCart } from "phosphor-react";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import {
    CoffeCardPriceSection,
    CoffeCardPriceWrapper,
    CoffeCardQuantitySection,
    CoffeCardQuantityWrapper,
    CoffeCardWrapper,
    CoffeImage,
    CoffeLabel,
    CoffeLabelContainer,
    Quantity,
} from "./style";

interface CoffeCardProps {
    imgPath?: string;
}

export function CoffeCard({ imgPath }: CoffeCardProps) {
    return (
        <CoffeCardWrapper>
            <CoffeImage src={imgPath} alt="" />
            <CoffeLabelContainer>
                <CoffeLabel>especial</CoffeLabel>
                <CoffeLabel>alcoolico</CoffeLabel>
                <CoffeLabel>gelado</CoffeLabel>
            </CoffeLabelContainer>

            <h3>Expresso tradicional</h3>
            <span>O tradicional café feito com água quente e grãos moidos</span>

            <CoffeCardPriceWrapper>
                <CoffeCardPriceSection>
                    <p>R$</p>
                    <p>9,90</p>
                </CoffeCardPriceSection>

                <CoffeCardQuantityWrapper>
                    <CoffeCardQuantitySection>
                        <span>
                            <img src={minusIcon} alt="" />
                        </span>
                        <Quantity>1</Quantity>
                        <span>
                            <img src={plusIcon} alt="" />
                        </span>
                    </CoffeCardQuantitySection>
                    <p>
                        <ShoppingCart size={22} weight="fill" color="white" />
                    </p>
                </CoffeCardQuantityWrapper>
            </CoffeCardPriceWrapper>
        </CoffeCardWrapper>
    );
}
