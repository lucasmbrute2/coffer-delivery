import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";
import {
    BenefitsIcon,
    BenefitsSectionContainer,
    BenefitsText,
    HomeContainer,
    SummarySection,
} from "./style";
import coffeHome from "../../assets/Coffe/coffeHome.png";

export function Home() {
    return (
        <HomeContainer>
            <SummarySection>
                <p>Encontre o café perfeito para qualquer hora do dia</p>
                <span>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora
                </span>

                <BenefitsSectionContainer>
                    <div>
                        <BenefitsIcon iconBackGroundColor="yellow">
                            <ShoppingCart
                                size={16}
                                color="white"
                                weight="fill"
                            />
                        </BenefitsIcon>
                        <BenefitsText>Compra simples e segura</BenefitsText>
                    </div>
                    <div>
                        <BenefitsIcon iconBackGroundColor="gray">
                            <Package size={16} color="white" weight="fill" />
                        </BenefitsIcon>
                        <BenefitsText>
                            Embalagem mantém o café intacto
                        </BenefitsText>
                    </div>
                    <div>
                        <BenefitsIcon iconBackGroundColor="yellow-light">
                            <Timer size={16} color="white" weight="fill" />
                        </BenefitsIcon>
                        <BenefitsText>Entrega rápida e rastreada</BenefitsText>
                    </div>
                    <div>
                        <BenefitsIcon iconBackGroundColor="purple">
                            <Coffee size={16} color="white" weight="fill" />
                        </BenefitsIcon>
                        <BenefitsText>
                            O café chega fresquinho até você
                        </BenefitsText>
                    </div>
                </BenefitsSectionContainer>
            </SummarySection>

            <div>
                <img src={coffeHome} alt="" />
            </div>
        </HomeContainer>
    );
}
