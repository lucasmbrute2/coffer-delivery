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
                const itemIsAlreadyIntoCart = draft.findIndex(
                    (item) => item.id === action.item.id
                );

                if (itemIsAlreadyIntoCart !== -1) {
                    draft[itemIsAlreadyIntoCart].quantity += action.quantity;
                } else {
                    draft.push({ ...action.item, quantity: action.quantity });
                }
            });

        case ActionTypes.EDIT_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemPositionInCart = draft.findIndex(
                    (item) => item.id === action.item.id
                );

                if (itemPositionInCart === -1) return;
                draft[itemPositionInCart].quantity = action.item.quantity;
            });

        case ActionTypes.REMOVE_ITEM_FROM_CART:
            return produce(state, (draft) => {
                const itemPositionInCart = draft.findIndex(
                    (item) => item.id === action.id
                );
                if (itemPositionInCart === -1) return;
                draft.splice(itemPositionInCart, 1);
            });

        default:
            throw new Error("Unknown action type", action);
    }
}
