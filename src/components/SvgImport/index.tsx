import Americano from "../../assets/Coffe/Americano.svg";
import Arabe from "../../assets/Coffe/Arabe.svg";
import CafeComLeite from "../../assets/Coffe/CafeComLeite.svg";
import CafeGelado from "../../assets/Coffe/CafeGelado.svg";
import Capuccino from "../../assets/Coffe/Capuccino.svg";
import ChocolateQuente from "../../assets/Coffe/ChocolateQuente.svg";
import Cubano from "../../assets/Coffe/Cubano.svg";
import Expresso from "../../assets/Coffe/Expresso.svg";
import ExpressoCremoso from "../../assets/Coffe/ExpressoCremoso.svg";
import Havaiano from "../../assets/Coffe/Havaiano.svg";
import Irlandes from "../../assets/Coffe/Irlandes.svg";
import Latte from "../../assets/Coffe/Americano.svg";
import Macchiato from "../../assets/Coffe/Macchiato.svg";
import Mochaccino from "../../assets/Coffe/Mochaccino.svg";
import { CoffeImage } from "./style";

const activeSvg = {
    Americano: Americano,
    Arabe,
    CafeComLeite,
    CafeGelado,
    Capuccino,
    ChocolateQuente,
    Cubano,
    Expresso,
    ExpressoCremoso,
    Havaiano,
    Irlandes,
    Latte,
    Macchiato,
    Mochaccino,
};

export type svgKeyName = keyof typeof activeSvg;

interface SvgImportProps {
    svgName: svgKeyName;
}

export function SvgImport({ svgName }: SvgImportProps) {
    return <CoffeImage src={activeSvg[svgName]} />;
}
