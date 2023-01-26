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
    const { coffes, setCart } = useContext(CoffeContext);
    const { imgSrc, price, labels, description, name, id } = coffe;

    const activeCoffe = coffes.find((accCoffe) => accCoffe.id === id);
    const [productQuantity, setProductQuantity] = useState(1);

    function handleMinusQuantity() {
        setProductQuantity((prev) => {
            if (prev <= 1) return prev;
            return (prev -= 1);
        });
    }

    function handlePlusQuantity() {
        setProductQuantity((prev) => (prev += 1));
    }

    //useReduce
    function handleAddToCart() {
        if (!activeCoffe) return;
        setCart((prev) => {
            const coffeAlreadyInCartIndex = prev.findIndex(
                (coffe) => coffe.id === activeCoffe.id
            );

            if (coffeAlreadyInCartIndex != -1) {
                return prev.map((cart, index) => {
                    if (index === coffeAlreadyInCartIndex) {
                        cart.quantity += productQuantity;
                    }
                    return cart;
                });
            }

            return [...prev, { ...activeCoffe, quantity: productQuantity }];
        });

        setProductQuantity(1);
    }

    return (
        <CoffeCardWrapper>
            <SvgImport svgName={imgSrc} />
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
                    <p>
                        {(
                            parseFloat(price.replace(",", ".")) *
                            productQuantity
                        ).toFixed(2)}
                    </p>
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
