import { MapPinLine } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";
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
    const { address, setAddress } = useContext(CoffeContext);

    async function handleGetAddress(cep: string) {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const payload = await res.json();
        setAddress(payload);
    }

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
                            onBlur={(e) => handleGetAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <InputField
                            type="text"
                            placeholder="Rua"
                            inputWidth={"100"}
                            value={address.logradouro}
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
                            <InputField
                                type="text"
                                placeholder="Bairro"
                                value={address.bairro}
                            />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <InputField
                                type="text"
                                placeholder="Cidade"
                                value={address.localidade}
                            />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <InputField
                                type="text"
                                placeholder="UF"
                                value={address.uf}
                            />
                        </div>
                    </InputInSameRowWrapper>
                </InputFormSection>
            </ShippingInformartionForm>
        </>
    );
}
