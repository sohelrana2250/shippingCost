import React from 'react';
import { useState, useEffect } from 'react';
import Cosmatic from '../Customatic/Cosmatic';
//import Data from '../../components/DATAJSON/Data.json'

const Cosmatices = () => {

    const [cosmatices, setCosmatices] = useState([])



    useEffect(() => {

        fetch('data.json').then((res) => res.json()).then((data) => setCosmatices(data)).catch((error) => console.log(error.message))



    }, [])

    console.log(cosmatices)

    return (
        <div>
            <h1>sohel</h1>
            {
                cosmatices.map((v, index) => <Cosmatic key={index} data={v}></Cosmatic>)

            }

        </div>
    );
};

export default Cosmatices;