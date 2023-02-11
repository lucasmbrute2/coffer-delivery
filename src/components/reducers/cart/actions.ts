import { CoffeIntoCart } from "../../../contexts/CoffeContext";

export enum ActionTypes {
    ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
    EDIT_ITEM_QUANTITY = "EDIT_ITEM_QUANTITY",
    REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
}

export function addProductIntoCart(item: CoffeIntoCart, quantity: number) {
    return {
        type: ActionTypes.ADD_NEW_PRODUCT,
        item,
        quantity,
    };
}

export function editProductQuantityIntoCart(item: CoffeIntoCart) {
    return {
        type: ActionTypes.EDIT_ITEM_QUANTITY,
        item,
    };
}

export function removeItemFromCart(id: string) {
    return {
        type: ActionTypes.REMOVE_ITEM_FROM_CART,
        id,
    };
}
