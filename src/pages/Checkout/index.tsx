import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CheckoutForm } from "../../components/CheckoutForm";
import { Summary } from "../../components/Summary";
import {
    BillingSectionHeader,
    BillingSectionHeaderTitle,
    BillingSectionWrapper,
    CheckoutContainer,
    PaymentInstrumentSection,
    PaymentInstrumentWrapper,
} from "./style";

export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                <CheckoutForm />
                <BillingSectionWrapper>
                    <BillingSectionHeader>
                        <span>
                            <CurrencyDollar size={22} color="#8047F8" />
                        </span>
                        <BillingSectionHeaderTitle>
                            <p>Pagamento</p>
                            <span>
                                O pagamento é feito na entrega. Escolha a forma
                                que deseja pagar
                            </span>
                        </BillingSectionHeaderTitle>
                    </BillingSectionHeader>
                    <PaymentInstrumentSection>
                        <PaymentInstrumentWrapper>
                            <span>
                                <CreditCard size={18} color="#8047F8" />
                            </span>
                            <p>cartão de crédito</p>
                        </PaymentInstrumentWrapper>
                        <PaymentInstrumentWrapper>
                            <span>
                                <Bank size={18} color="#8047F8" />
                            </span>
                            <p>cartão de débito</p>
                        </PaymentInstrumentWrapper>
                        <PaymentInstrumentWrapper>
                            <span>
                                <Money size={18} color="#8047F8" />
                            </span>
                            <p>dinheiro</p>
                        </PaymentInstrumentWrapper>
                    </PaymentInstrumentSection>
                </BillingSectionWrapper>
            </div>
            <Summary />
        </CheckoutContainer>
    );
}
