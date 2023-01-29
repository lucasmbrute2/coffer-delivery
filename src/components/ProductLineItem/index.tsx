import {
    Container,
    DeleteItemWrapper,
    ItemContainer,
    ItemPrice,
    ItemSummary,
} from "./style";
import { CoffeIntoCart } from "../../contexts/CoffeContext";
import { SvgImport } from "../SvgImport";
import minusIcon from "../../assets/minus.svg";
import plusIcon from "../../assets/plus.svg";
import { Trash } from "phosphor-react";

interface ProductLineItemProps {
    pli: CoffeIntoCart;
}

export function ProductLineItem({
    pli: { id, name, quantity, imgSrc },
}: ProductLineItemProps) {
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
                        <span>
                            <img src={minusIcon} alt="" />
                        </span>
                        <p>1</p>
                        <span>
                            <img src={plusIcon} alt="" />
                        </span>
                    </div>

                    <DeleteItemWrapper>
                        <span>
                            <Trash size={16} color="#8047F8" />
                        </span>
                        <p>remover</p>
                    </DeleteItemWrapper>
                </ItemContainer>
            </ItemSummary>
            <ItemPrice>R$9,90</ItemPrice>
        </Container>
    );
}
