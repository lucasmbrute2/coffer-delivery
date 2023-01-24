import { Cart, CartWrapper, CurrentLocation, HeaderContainer } from "./style";
import CoffeDeliveryLogo from "../../assets/Logo/Logo.png";
import pin from "../../assets/pin.svg";
import cart from "../../assets/cart.svg";

import { Location } from "../Location";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={CoffeDeliveryLogo} alt="" />
            </div>

            <CartWrapper>
                <CurrentLocation>
                    <img src={pin} /> <Location></Location>
                </CurrentLocation>
                <Cart>
                    <img src={cart} />
                </Cart>
            </CartWrapper>
        </HeaderContainer>
    );
}
