import { ADD_ITEM } from "./actionsType"

export const addItems = (data) => {
    return {
        type: ADD_ITEM,
        payload: {
            data:data
        }
    }
}