import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import deliveryImage from "../../assets/delivery.png";
import {
    CheckoutConfirmationContainer,
    CheckoutDetailsWrapper,
    ContentContainer,
} from "./style";

export function CheckoutConfirmation() {
    return (
        <CheckoutConfirmationContainer>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <ContentContainer>
                <div>
                    <CheckoutDetailsWrapper backgroundColorIcon="purple">
                        <span>
                            <MapPin size={16} weight="fill" color="white" />
                        </span>
                        <div>
                            <p>
                                Entrega em{" "}
                                <b>Rua João Daniel Martinelli, 102</b>
                            </p>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </CheckoutDetailsWrapper>
                    <CheckoutDetailsWrapper backgroundColorIcon="yellowLight">
                        <span>
                            <Timer size={16} weight="fill" color="white" />
                        </span>
                        <div>
                            <p>Previsão de entrega</p>
                            <b>20 min - 30 min</b>
                        </div>
                    </CheckoutDetailsWrapper>
                    <CheckoutDetailsWrapper backgroundColorIcon="yellowDark">
                        <span>
                            <CurrencyDollar
                                size={16}
                                weight="fill"
                                color="white"
                            />
                        </span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <b>Cartão de Crédito</b>
                        </div>
                    </CheckoutDetailsWrapper>
                </div>

                <img
                    src={deliveryImage}
                    alt="Um homem em uma moto, representendo um motoboy indo entregar o pedido"
                />
            </ContentContainer>
        </CheckoutConfirmationContainer>
    );
}
