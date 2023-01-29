import { MapPinLine } from "phosphor-react";
import {
    HeaderContainerTitle,
    HeaderFormWrapper,
    InputField,
    InputFormSection,
    InputInSameRowWrapper,
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
                        <InputField
                            type="text"
                            placeholder="CEP"
                            inputWidth={"30"}
                        />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <InputField
                            type="text"
                            placeholder="Rua"
                            inputWidth={"100"}
                        />
                    </div>

                    <InputInSameRowWrapper>
                        <div>
                            <label htmlFor=""></label>
                            <InputField
                                type="text"
                                placeholder="Número"
                                inputWidth={"100"}
                            />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <InputField
                                type="text"
                                placeholder="Complemento"
                                inputWidth={"100"}
                            />
                        </div>
                    </InputInSameRowWrapper>

                    <InputInSameRowWrapper>
                        <div>
                            <label htmlFor=""></label>
                            <InputField type="text" placeholder="Bairro" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <InputField type="text" placeholder="Cidade" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <InputField type="text" placeholder="UF" />
                        </div>
                    </InputInSameRowWrapper>
                </InputFormSection>
            </ShippingInformartionForm>
        </>
    );
}
