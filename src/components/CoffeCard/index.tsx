import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import { Coffe, CoffeContext } from "../../contexts/CoffeContext";
import { SvgImport } from "../SvgImport";
import {
    CoffeCardPriceSection,
    CoffeCardPriceWrapper,
    CoffeCardQuantitySection,
    CoffeCardQuantityWrapper,
    CoffeCardWrapper,
    CoffeLabel,
    CoffeLabelContainer,
    Quantity,
} from "./style";

interface CoffeCardProps {
    coffe: Coffe;
}

export function CoffeCard({ coffe }: CoffeCardProps) {
    const { coffes, setCoffes } = useContext(CoffeContext);
    const { imgSrc, quantity, price, labels, description, name } = coffe;

    //improve that
    function handleMinusQuantity() {
        setCoffes((prev) => {
            return prev.map((co) => {
                if (co === coffe && co.quantity > 1) {
                    co.quantity -= 1;
                }
                return co;
            });
        });
    }

    function handlePlusQuantity() {
        setCoffes((prev) => {
            return prev.map((co) => {
                if (co === coffe) {
                    co.quantity += 1;
                }
                return co;
            });
        });
    }
    return (
        <CoffeCardWrapper>
            <SvgImport svgName={imgSrc} />
            <CoffeLabelContainer>
                {labels.map((label) => (
                    <CoffeLabel>{label}</CoffeLabel>
                ))}
            </CoffeLabelContainer>

            <h3>{name}</h3>
            <span>{description}</span>

            <CoffeCardPriceWrapper>
                <CoffeCardPriceSection>
                    <p>R$</p>
                    <p>{price}</p>
                </CoffeCardPriceSection>

                <CoffeCardQuantityWrapper>
                    <CoffeCardQuantitySection>
                        <span onClick={handleMinusQuantity}>
                            <img src={minusIcon} alt="" />
                        </span>
                        <Quantity>{quantity}</Quantity>
                        <span onClick={handlePlusQuantity}>
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
