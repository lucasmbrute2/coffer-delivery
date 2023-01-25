import { ShoppingCart, Timer } from "phosphor-react";
import Coffee from "phosphor-react/dist/icons/Coffee";
import Package from "phosphor-react/dist/icons/Package";

export function Home() {
    return (
        <div>
            <div>
                <p>Encontre o café perfeito para qualquer hora do dia</p>
                <span>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    qualquer hora Com o Coffee Delivery você recebe seu café
                    onde estiver, a qualquer hora
                </span>
                <div>
                    <div>
                        <ShoppingCart size={32} />
                        <p>Compra simples e segura</p>
                    </div>
                    <div>
                        <Package size={32} />
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <Timer size={32} />
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div>
                        <Coffee size={32} />
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>

            <div>img</div>
        </div>
    );
}
