import { useEffect, useState } from "react";
import { states } from "../../../states";
import { api } from "./api";

export function Location() {
    const [geolocation, setGeolocation] = useState({
        city: "",
        symbol: "",
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async ({ coords }) => {
            const {
                address: { city, state },
            } = await api.getCityAndState(
                coords.latitude.toString(),
                coords.longitude.toString()
            );

            const statesCtx = states.UF.find((el) => el.nome === state);

            if (statesCtx) {
                setGeolocation({
                    city,
                    symbol: statesCtx.sigla,
                });
            }
        });
    }, [geolocation]);

    return (
        <div>
            {geolocation.city &&
                geolocation.symbol &&
                `${geolocation.city}, ${geolocation.symbol}`}
        </div>
    );
}
