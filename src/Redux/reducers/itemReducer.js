import { initialState } from "./initialState";
import { ADD_ITEM } from '../actions/actionsType';

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const { data } = action.payload;
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        data
                    }
                ]
            }
            break;
    
        default:
            return state;
    }
}