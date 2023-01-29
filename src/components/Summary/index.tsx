import { useContext } from "react";
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
                        <EachPrice>R$ 29,79</EachPrice>
                    </PaymentDetailSection>
                    <PaymentDetailSection>
                        <LabelPrice>Entrega</LabelPrice>
                        <EachPrice>R$ 3,50</EachPrice>
                    </PaymentDetailSection>
                    <PaymentDetailSection>
                        <TotalPriceLabel>TOTAL</TotalPriceLabel>
                        <TotalPriceValue>R$ 33,20</TotalPriceValue>
                    </PaymentDetailSection>
                </PaymentDetailSectionWrapper>

                <SubmitButton>Confirmar pedido</SubmitButton>
            </SummaryContainer>
        </div>
    );
}
