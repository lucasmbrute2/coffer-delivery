import { MapPinLine } from "phosphor-react";
import {
    HeaderContainerTitle,
    HeaderFormWrapper,
    InputFormSection,
    ShippingInformartionForm,
    ShippingInformationTitle,
} from "./style";

export function CheckoutForm() {
    return (
        <>
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
                            Informe o endereço de onde deseja receber seu pedido
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
        </>
    );
}
