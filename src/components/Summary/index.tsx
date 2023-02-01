import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoffeContext } from "../../contexts/CoffeContext";
import { ProductLineItem } from "../ProductLineItem";
import {
    CartInformationTitle,
    EachPrice,
    LabelPrice,
    PaymentDetailSection,
    PaymentDetailSectionWrapper,
    SubmitButton,
    SummaryContainer,
    TotalPriceLabel,
    TotalPriceValue,
} from "./style";

export function Summary() {
    const { cart } = useContext(CoffeContext);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const total = cart.reduce((acc, curr) => {
            const a = acc + curr.price * curr.quantity;
            return a;
        }, 0);

        setTotalItems(total);
    }, [cart]);

    return (
        <div>
            <CartInformationTitle>Cafés selecionados</CartInformationTitle>
            <SummaryContainer>
                {cart.map((item) => (
                    <div>
                        <ProductLineItem pli={item} />
                    </div>
                ))}

                <PaymentDetailSectionWrapper>
                    <PaymentDetailSection>
                        <LabelPrice>Total de itens</LabelPrice>
                        <EachPrice>R$ {totalItems.toFixed(2)}</EachPrice>
                    </PaymentDetailSection>
                    <PaymentDetailSection>
                        <LabelPrice>Entrega</LabelPrice>
                        <EachPrice>R$ 3,50</EachPrice>
                    </PaymentDetailSection>
                    <PaymentDetailSection>
                        <TotalPriceLabel>TOTAL</TotalPriceLabel>
                        <TotalPriceValue>
                            R$ {(totalItems + 3.5).toFixed(2)}
                        </TotalPriceValue>
                    </PaymentDetailSection>
                </PaymentDetailSectionWrapper>

                <Link to={"/confirmation"}>
                    <SubmitButton>Confirmar pedido</SubmitButton>
                </Link>
            </SummaryContainer>
        </div>
    );
}
