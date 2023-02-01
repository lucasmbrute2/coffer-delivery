import { createContext, ReactNode, useState } from "react";
import { svgKeyName } from "../components/SvgImport";

export interface Coffe {
    id: string;
    imgSrc: svgKeyName;
    name: string;
    labels: string[];
    description: string;
    quantity: number;
    price: number;
}

export interface CoffeIntoCart {
    id: string;
    quantity: number;
    name: string;
    imgSrc: svgKeyName;
    price: number;
}

interface Address {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
}

interface CoffeContextData {
    coffes: Coffe[];
    setCoffes: React.Dispatch<React.SetStateAction<Coffe[]>>;
    cart: CoffeIntoCart[];
    setCart: React.Dispatch<React.SetStateAction<CoffeIntoCart[]>>;
    selectedPaymentMethod: string;
    setSelectedPaymentMehthod: React.Dispatch<React.SetStateAction<string>>;
    address: Address;
    setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

export const CoffeContext = createContext({} as CoffeContextData);

interface CoffeProviderrProps {
    children: ReactNode;
}

export function CoffeProvider({ children }: CoffeProviderrProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([]);
    const [cart, setCart] = useState<CoffeIntoCart[]>([]);
    const [selectedPaymentMethod, setSelectedPaymentMehthod] = useState("");

    const [address, setAddress] = useState({
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        siafi: "",
        uf: "",
    });

    return (
        <CoffeContext.Provider
            value={{
                coffes,
                setCoffes,
                cart,
                setCart,
                selectedPaymentMethod,
                setSelectedPaymentMehthod,
                address,
                setAddress,
            }}
        >
            {children}
        </CoffeContext.Provider>
    );
}
