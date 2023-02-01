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

export function ProductLineItem({
    pli: { id, name, quantity, imgSrc, price },
}: ProductLineItemProps) {
    const { cart, setCart } = useContext(CoffeContext);

    function handlePlusQuantity() {
        setCart((prev) => {
            const newArr = prev.map((i) => {
                if (i.id !== id) return i;

                i.quantity += 1;
                return i;
            });

            return newArr;
        });
    }

    function handleMinusQuantity() {
        if (quantity <= 1) {
            alert("Não é possível ter menos que 1 produto no carrinho.");
            return;
        }

        setCart((prev) => {
            const newArr = prev.map((i) => {
                if (i.id !== id) return i;

                i.quantity--;
                return i;
            });

            return newArr;
        });
    }

    function handleRemoveProductLineItem() {
        setCart((prev) => {
            const cartWithRemovedItem = cart.filter((item) => item.id !== id);

            if (!cartWithRemovedItem) return prev;

            return cartWithRemovedItem;
        });
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
                <p>Expresso tradicional</p>
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

                    <DeleteItemWrapper>
                        <span>
                            <Trash size={16} color="#8047F8" />
                        </span>
                        <p onClick={handleRemoveProductLineItem}>remover</p>
                    </DeleteItemWrapper>
                </ItemContainer>
            </ItemSummary>
            <ItemPrice>R$ {(price * quantity).toFixed(2)}</ItemPrice>
        </Container>
    );
}
