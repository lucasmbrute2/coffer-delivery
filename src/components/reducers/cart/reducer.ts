import { CoffeIntoCart } from "../../../contexts/CoffeContext";
import { ActionTypes } from "./actions";
import { produce } from "immer";

export function cartReducer(
    state: CoffeIntoCart[],
    action: any
): CoffeIntoCart[] {
    switch (action.type) {
        case ActionTypes.ADD_NEW_PRODUCT:
            return produce(state, (draft) => {
                const itemIsAlreadyIntoCart = state.findIndex(
                    (item) => item.id === action.item.id
                );

                if (itemIsAlreadyIntoCart !== -1) {
                    draft[itemIsAlreadyIntoCart].quantity++;
                } else {
                    draft.push(action.item);
                }
            });

        default:
            throw new Error("Unknown action type", action);
    }
}
