import { Cart } from "./style";
import miniCart from "../../assets/cart.svg";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";

export function MiniCart() {
    const { cart } = useContext(CoffeContext);
    const miniCartQuantityOfItems = cart.reduce(
        (acc, curr) => (acc += curr.quantity),
        0
    );

    console.log({ cart });

    return (
        <Cart>
            <img src={miniCart} alt="" />
            {miniCartQuantityOfItems >= 1 && (
                <span>{miniCartQuantityOfItems}</span>
            )}
        </Cart>
    );
}
