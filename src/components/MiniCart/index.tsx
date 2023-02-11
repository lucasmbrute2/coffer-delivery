import { Cart } from "./style";
import miniCart from "../../assets/cart.svg";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";

export function MiniCart() {
    const { cartState } = useContext(CoffeContext);
    const miniCartQuantityOfItems = cartState.reduce(
        (acc, curr) => (acc += curr.quantity),
        0
    );

    return (
        <Cart>
            <img src={miniCart} alt="" />
            {miniCartQuantityOfItems >= 1 && (
                <span>{miniCartQuantityOfItems}</span>
            )}
        </Cart>
    );
}
