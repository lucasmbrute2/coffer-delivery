export function Checkout() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <h2>Complete seu pedido</h2>
                <form>
                    <div>
                        <span></span>
                        <div>
                            <p>Endereço de entrega</p>
                            <span>
                                Informe o endereço de onde deseja receber seu
                                pedido
                            </span>
                        </div>
                    </div>
                    {/*info section*/}
                    <div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <span></span>
                            <div>
                                <p>Pagamento</p>
                                <span>
                                    O pagamento é feito na entrega. Escolha a
                                    forma que deseja pagar
                                </span>
                            </div>
                        </div>
                        <div>
                            <span>card</span>
                            <p>cartão de crédito</p>
                        </div>
                        <div>
                            <span>card</span>
                            <p>cartão de débito</p>
                        </div>
                        <div>
                            <span>money</span>
                            <p>dinheiro</p>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p>Expresso tradicional</p>
                        <div>
                            <input type="number" />
                            remover
                        </div>
                        R$9,90
                    </div>
                </div>

                <div>
                    <p>total de itens</p>
                    <p>RS29,79</p>
                </div>
                <div>
                    <p>Entrega</p>
                    <p>RS3,50</p>
                </div>
                <div>
                    <p>TOTAL</p>
                    <p>RS33,20</p>
                </div>

                <button>Confirmar pedido</button>
            </div>
        </div>
    );
}
