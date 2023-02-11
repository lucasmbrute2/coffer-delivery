import {
    Container,
    DeleteItemWrapper,
    ItemContainer,
    ItemPrice,
    ItemSummary,
} from "./style";
import { CoffeContext, CoffeIntoCart } from "../../contexts/CoffeContext";
import { SvgImport } from "../SvgImport";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import { Trash } from "phosphor-react";
import { useContext } from "react";

interface ProductLineItemProps {
    pli: CoffeIntoCart;
}

export function ProductLineItem({ pli }: ProductLineItemProps) {
    const { editItemInCart, removeItem } = useContext(CoffeContext);
    const { id, quantity, imgSrc, price, name } = pli;

    function handlePlusQuantity() {
        editItemInCart({ ...pli, quantity: quantity + 1 });
    }

    function handleMinusQuantity() {
        if (quantity === 1) return;
        editItemInCart({ ...pli, quantity: quantity - 1 });
    }

    function handleRemoveProductLineItem() {
        removeItem(id);
    }

    return (
        <Container>
            <SvgImport
                height="4rem"
                width="4rem"
                margin="none"
                svgName={imgSrc}
            />
            <ItemSummary>
                <p>{name}</p>
                <ItemContainer>
                    <div>
                        <span onClick={handleMinusQuantity}>
                            <img src={minusIcon} alt="" />
                        </span>
                        <p>{quantity}</p>
                        <span onClick={handlePlusQuantity}>
                            <img src={plusIcon} alt="" />
                        </span>
                    </div>

                    <DeleteItemWrapper onClick={handleRemoveProductLineItem}>
                        <span>
                            <Trash size={16} color="#8047F8" />
                        </span>
                        <p>remover</p>
                    </DeleteItemWrapper>
                </ItemContainer>
            </ItemSummary>
            <ItemPrice>R$ {(price * quantity).toFixed(2)}</ItemPrice>
        </Container>
    );
}
