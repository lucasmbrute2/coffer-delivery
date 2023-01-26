import { Cart } from "./style";
import miniCart from "../../assets/cart.svg";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";

export function MiniCart() {
    const { cart } = useContext(CoffeContext);

    return (
        <Cart>
            <img src={miniCart} alt="" />
            {cart.length >= 1 && <span>{cart.length}</span>}
        </Cart>
    );
}
