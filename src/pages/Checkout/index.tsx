import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useContext } from "react";
import { CheckoutForm } from "../../components/CheckoutForm";
import { Summary } from "../../components/Summary";
import { CoffeContext } from "../../contexts/CoffeContext";
import {
    BillingSectionHeader,
    BillingSectionHeaderTitle,
    BillingSectionWrapper,
    CheckoutContainer,
    PaymentInstrumentSection,
    PaymentInstrumentWrapper,
} from "./style";

export function Checkout() {
    const { setSelectedPaymentMehthod } = useContext(CoffeContext);

    function handleSetPaymentMethod(paymentMethod: string) {
        if (!paymentMethod) return;

        setSelectedPaymentMehthod(paymentMethod);
    }

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
                        <PaymentInstrumentWrapper
                            name="Cartão de crédito"
                            onClick={(e) =>
                                handleSetPaymentMethod("Cartão de crédito")
                            }
                        >
                            <span>
                                <CreditCard size={18} color="#8047F8" />
                            </span>
                            <p>cartão de crédito</p>
                        </PaymentInstrumentWrapper>
                        <PaymentInstrumentWrapper
                            onClick={(e) =>
                                handleSetPaymentMethod("Cartão de Débito")
                            }
                        >
                            <span>
                                <Bank size={18} color="#8047F8" />
                            </span>
                            <p>cartão de débito</p>
                        </PaymentInstrumentWrapper>
                        <PaymentInstrumentWrapper
                            onClick={(e) => handleSetPaymentMethod("Dinheiro")}
                        >
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
