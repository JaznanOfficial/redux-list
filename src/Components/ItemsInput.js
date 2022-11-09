import React, { useReducer } from "react";
import {useRef} from "react"
import { useDispatch } from "react-redux";
import { addItems } from "../Redux/actions/actionsController";

const ItemsInput = () => {

    const itemRef = useRef()
    const dispatch = useDispatch()

    const itemsHandler = (e) => {
        e.preventDefault()
        const item = itemRef.current.value;
        console.log(item);
        dispatch(addItems(item))
        itemRef.current.value = '';
        
    }
    return (
        <div className="my-4 w-50 mx-auto">
            <form class="input-group my-5" onSubmit={itemsHandler}>
                <input
                    type="text"
                    className="mt-5"
                    placeholder="item name"
                    ref={itemRef}
                />
                <button>add item</button>
            </form>
        </div>
    );
};

export default ItemsInput;
