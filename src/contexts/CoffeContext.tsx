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

interface CoffeContextData {
    coffes: Coffe[];
    setCoffes: React.Dispatch<React.SetStateAction<Coffe[]>>;
    cart: Coffe[];
    setCart: React.Dispatch<React.SetStateAction<Coffe[]>>;
}

export const CoffeContext = createContext({} as CoffeContextData);

interface CoffeProviderrProps {
    children: ReactNode;
}

export function CoffeProvider({ children }: CoffeProviderrProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([]);
    const [cart, setCart] = useState<Coffe[]>([]);

    return (
        <CoffeContext.Provider value={{ coffes, setCoffes, cart, setCart }}>
            {children}
        </CoffeContext.Provider>
    );
}
