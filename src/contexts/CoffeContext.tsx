import { createContext, ReactNode, useReducer, useState } from "react";
import {
    addProductIntoCart,
    editProductQuantityIntoCart,
    removeItemFromCart,
} from "../components/reducers/cart/actions";
import { cartReducer } from "../components/reducers/cart/reducer";
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
    addItemToCart: (item: CoffeIntoCart, quantity?: number) => void;
    cartState: CoffeIntoCart[];
    editItemInCart: (item: CoffeIntoCart) => void;
    removeItem: (id: string) => void;
}

export const CoffeContext = createContext({} as CoffeContextData);

interface CoffeProviderrProps {
    children: ReactNode;
}

export function CoffeProvider({ children }: CoffeProviderrProps) {
    const [coffes, setCoffes] = useState<Coffe[]>([]);
    const [cart, setCart] = useState<CoffeIntoCart[]>([]);
    const [selectedPaymentMethod, setSelectedPaymentMehthod] = useState("");

    const [address, setAddress] = useState({} as Address);

    const [cartState, dispatch] = useReducer(
        cartReducer,
        [] as CoffeIntoCart[]
    );

    function addItemToCart(item: CoffeIntoCart, quantity = 1) {
        dispatch(addProductIntoCart(item, quantity));
    }

    function editItemInCart(item: CoffeIntoCart) {
        dispatch(editProductQuantityIntoCart(item));
    }

    function removeItem(id: string) {
        dispatch(removeItemFromCart(id));
    }

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
                addItemToCart,
                cartState,
                editItemInCart,
                removeItem,
            }}
        >
            {children}
        </CoffeContext.Provider>
    );
}
