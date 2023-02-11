import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
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
    const { coffes, addItemToCart } = useContext(CoffeContext);
    const [productQuantity, setProductQuantity] = useState(1);

    const { imgSrc, price, labels, description, name, id } = coffe;
    const activeCoffe = coffes.find((accCoffe) => accCoffe.id === id);

    function handleMinusQuantity() {
        setProductQuantity((prev) => {
            if (prev <= 1) return prev;
            return (prev -= 1);
        });
    }

    function handlePlusQuantity() {
        setProductQuantity((prev) => (prev += 1));
    }

    function handleAddToCart() {
        if (!activeCoffe) return;
        addItemToCart(activeCoffe, productQuantity);
        setProductQuantity(1);
    }

    return (
        <CoffeCardWrapper>
            <SvgImport
                height="7.5rem"
                width="7.5rem"
                margin="calc(-1.25rem - 20px)"
                svgName={imgSrc}
            />
            <CoffeLabelContainer>
                {labels.map((label) => (
                    <CoffeLabel key={label}>{label}</CoffeLabel>
                ))}
            </CoffeLabelContainer>

            <h3>{name}</h3>
            <span>{description}</span>

            <CoffeCardPriceWrapper>
                <CoffeCardPriceSection>
                    <p>R$</p>
                    <p>{(price * productQuantity).toFixed(2)}</p>
                </CoffeCardPriceSection>

                <CoffeCardQuantityWrapper>
                    <CoffeCardQuantitySection>
                        <span onClick={handleMinusQuantity}>
                            <img src={minusIcon} alt="" />
                        </span>
                        <Quantity>{productQuantity}</Quantity>
                        <span onClick={handlePlusQuantity}>
                            <img src={plusIcon} alt="" />
                        </span>
                    </CoffeCardQuantitySection>
                    <p onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" color="white" />
                    </p>
                </CoffeCardQuantityWrapper>
            </CoffeCardPriceWrapper>
        </CoffeCardWrapper>
    );
}
