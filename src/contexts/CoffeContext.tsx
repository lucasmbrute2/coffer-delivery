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

interface CoffeContextData {
    coffes: Coffe[];
    setCoffes: React.Dispatch<React.SetStateAction<Coffe[]>>;
    cart: CoffeIntoCart[];
    setCart: React.Dispatch<React.SetStateAction<CoffeIntoCart[]>>;
}

export const CoffeContext = createContext({} as CoffeContextData);

interface CoffeProviderrProps {
    children: ReactNode;
}

export function CoffeProvider({ children }: CoffeProviderrProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([]);
    const [cart, setCart] = useState<CoffeIntoCart[]>([]);

    return (
        <CoffeContext.Provider
            value={{
                coffes,
                setCoffes,
                cart,
                setCart,
            }}
        >
            {children}
        </CoffeContext.Provider>
    );
}
