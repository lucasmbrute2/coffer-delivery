import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";
import {
    BenefitsIcon,
    BenefitsSectionContainer,
    BenefitsText,
    CoffeCardListSection,
    HomeContainer,
    SummarySection,
} from "./style";
import coffeHome from "../../assets/Coffe/coffeHome.png";
import { CoffeCard } from "../../components/CoffeCard";
import { useContext, useEffect } from "react";
import coffesJSON from "../../coffesPayload.json";
import { CoffeContext } from "../../contexts/CoffeContext";

export function Home() {
    const { coffes, setCoffes } = useContext(CoffeContext);

    useEffect(() => {
        setCoffes(JSON.parse(JSON.stringify(coffesJSON)));
    }, []);

    return (
        <>
            <HomeContainer>
                <SummarySection>
                    <p>Encontre o café perfeito para qualquer hora do dia</p>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver,
                        a qualquer hora
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
                                <Package
                                    size={16}
                                    color="white"
                                    weight="fill"
                                />
                            </BenefitsIcon>
                            <BenefitsText>
                                Embalagem mantém o café intacto
                            </BenefitsText>
                        </div>
                        <div>
                            <BenefitsIcon iconBackGroundColor="yellow-light">
                                <Timer size={16} color="white" weight="fill" />
                            </BenefitsIcon>
                            <BenefitsText>
                                Entrega rápida e rastreada
                            </BenefitsText>
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
            <CoffeCardListSection>
                <h2>Nossos cafés</h2>
                <div>
                    {coffes.map((coffe) => (
                        <CoffeCard key={coffe.id} coffe={coffe} />
                    ))}
                </div>
            </CoffeCardListSection>
        </>
    );
}
