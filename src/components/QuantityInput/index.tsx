import { CoffeCardQuantitySection, Quantity } from "./style";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";

interface QuantityInputProps {
    quantity: number;
    handlePlusQuantity: () => void;
    handleMinusQuantity: () => void;
    customHeight?: string;
}

export function QuantityInput({
    quantity,
    handleMinusQuantity,
    handlePlusQuantity,
    customHeight,
}: QuantityInputProps) {
    return (
        <CoffeCardQuantitySection customHeight={customHeight}>
            <span onClick={handleMinusQuantity}>
                <img src={minusIcon} alt="" />
            </span>
            <Quantity>{quantity}</Quantity>
            <span onClick={handlePlusQuantity}>
                <img src={plusIcon} alt="" />
            </span>
        </CoffeCardQuantitySection>
    );
}
