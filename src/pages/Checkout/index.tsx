import {
    Bank,
    CreditCard,
    CurrencyDollar,
    MapPinLine,
    Money,
} from "phosphor-react";
import { useContext } from "react";
import { ProductLineItem } from "../../components/ProductLineItem";
import { Summary } from "../../components/Summary";
import { CoffeContext } from "../../contexts/CoffeContext";
import {
    BillingSectionHeader,
    BillingSectionHeaderTitle,
    BillingSectionWrapper,
    CheckoutContainer,
    HeaderContainerTitle,
    HeaderFormWrapper,
    InputFormSection,
    PaymentInstrumentSection,
    PaymentInstrumentWrapper,
    ShippingInformartionForm,
    ShippingInformationTitle,
} from "./style";

export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                <ShippingInformationTitle>
                    Complete seu pedido
                </ShippingInformationTitle>
                <ShippingInformartionForm>
                    <HeaderFormWrapper>
                        <span>
                            <MapPinLine size={22} color="#C47F17" />
                        </span>
                        <HeaderContainerTitle>
                            <p>Endereço de entrega</p>
                            <span>
                                Informe o endereço de onde deseja receber seu
                                pedido
                            </span>
                        </HeaderContainerTitle>
                    </HeaderFormWrapper>
                    <InputFormSection>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="CEP" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Rua" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Número" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Complemento" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Bairro" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Cidade" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" placeholder="UF" />
                        </div>
                    </InputFormSection>
                </ShippingInformartionForm>
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
