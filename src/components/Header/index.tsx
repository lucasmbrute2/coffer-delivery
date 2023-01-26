import { CartWrapper, CurrentLocation, HeaderContainer } from "./style";
import CoffeDeliveryLogo from "../../assets/Logo/Logo.png";
import pin from "../../assets/pin.svg";

import { Location } from "../Location";
import { MiniCart } from "../MiniCart";

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <img src={CoffeDeliveryLogo} />
            </div>

            <CartWrapper>
                <CurrentLocation>
                    <img src={pin} />
                    <Location />
                </CurrentLocation>
                <MiniCart />
            </CartWrapper>
        </HeaderContainer>
    );
}
