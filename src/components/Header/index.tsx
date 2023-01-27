import { CartWrapper, CurrentLocation, HeaderContainer } from "./style";
import CoffeDeliveryLogo from "../../assets/Logo/Logo.png";
import pin from "../../assets/pin.svg";

import { Location } from "../Location";
import { MiniCart } from "../MiniCart";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <Link to={"/"}>
                <img src={CoffeDeliveryLogo} />
            </Link>

            <CartWrapper>
                <CurrentLocation>
                    <img src={pin} />
                    <Location />
                </CurrentLocation>
                <Link to={"/checkout"}>
                    <MiniCart />
                </Link>
            </CartWrapper>
        </HeaderContainer>
    );
}
