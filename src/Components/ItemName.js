import React from 'react';
import { useSelector } from 'react-redux';
import { itemReducer } from '../Redux/reducers/itemReducer';


const ItemName = () => {
    const items = useSelector((state) => state.itemReducer.data)
    console.log(items);
    return (
        <div>
            {items.map(item => (
                
                <ol>{item.data}</ol>
            ))}
        </div>
    );
};

export default ItemName;