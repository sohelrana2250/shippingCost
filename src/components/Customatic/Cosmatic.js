import React from 'react';
import { RemoveDataItem, setItemLocalStote } from '../Utilitys/Calculation';
import './Cosmatice.css'
const Cosmatic = (props) => {

    const addToCard = (id) => {

        setItemLocalStote(id);
    }
    const RemoveData = (id) => {
        RemoveDataItem(id);

    }
    const { name, address, age, balance, _id } = props.data
    return (
        <div className='product'>
            <h3>ID Number :{_id} </h3>
            <h4>Name :{name} </h4>
            <h4>Address : {address}</h4>
            <h4>Age : {age}</h4>
            <h4>Balance:{balance} </h4>
            <button onClick={() => addToCard(_id)}>Cosmatics</button>
            <button onClick={() => RemoveData(_id)}>Remove Data</button>
        </div>
    );
};

export default Cosmatic;