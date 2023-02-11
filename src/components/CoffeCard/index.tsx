import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";

import { Coffe, CoffeContext } from "../../contexts/CoffeContext";
import { QuantityInput } from "../QuantityInput";
import { SvgImport } from "../SvgImport";
import {
    CoffeCardPriceSection,
    CoffeCardPriceWrapper,
    CoffeCardQuantityWrapper,
    CoffeCardWrapper,
    CoffeLabel,
    CoffeLabelContainer,
} from "./style";

interface CoffeCardProps {
    coffe: Coffe;
}

export function CoffeCard({ coffe }: CoffeCardProps) {
    const { coffes, addItemToCart } = useContext(CoffeContext);
    const [quantity, setQuantity] = useState(1);

    const { imgSrc, price, labels, description, name, id } = coffe;
    const activeCoffe = coffes.find((accCoffe) => accCoffe.id === id);

    function handleMinusQuantity() {
        setQuantity((prev) => {
            if (prev <= 1) return prev;
            return (prev -= 1);
        });
    }

    function handlePlusQuantity() {
        setQuantity((prev) => (prev += 1));
    }

    function handleAddToCart() {
        if (!activeCoffe) return;
        addItemToCart(activeCoffe, quantity);
        setQuantity(1);
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
                    <p>{(price * quantity).toFixed(2)}</p>
                </CoffeCardPriceSection>

                <CoffeCardQuantityWrapper>
                    <QuantityInput
                        quantity={quantity}
                        handleMinusQuantity={handleMinusQuantity}
                        handlePlusQuantity={handlePlusQuantity}
                    />
                    <p onClick={handleAddToCart}>
                        <ShoppingCart size={22} weight="fill" color="white" />
                    </p>
                </CoffeCardQuantityWrapper>
            </CoffeCardPriceWrapper>
        </CoffeCardWrapper>
    );
}
