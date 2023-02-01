interface cityAndStateReturn {
    address: {
        state: string;
        city: string;
    };
}

export const api = {
    baseUrl: "https://nominatim.openstreetmap.org/reverse",

    async getCityAndState(
        lat: string,
        long: string
    ): Promise<cityAndStateReturn> {
        const res = await fetch(
            `${this.baseUrl}?lat=${lat}&lon=${long}&format=json`
        );
        return await res.json();
    },
};
