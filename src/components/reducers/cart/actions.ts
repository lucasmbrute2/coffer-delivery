import { CoffeIntoCart } from "../../../contexts/CoffeContext";

export enum ActionTypes {
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
    EDIT_ITEM = "EDIT_ITEM",
}

export function addProductIntoCart(item: CoffeIntoCart) {
    return {
        type: ActionTypes.ADD_NEW_PRODUCT,
        item,
    };
}

export function editProductQuantityIntoCart(item: CoffeIntoCart) {
    return {
        type: ActionTypes.EDIT_ITEM,
        item,
    };
}
