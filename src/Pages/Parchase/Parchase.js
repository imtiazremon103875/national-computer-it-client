import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Parchase = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({})
    const { name, description, image, minimumOderQuantity, availableQuantity, price } = detail


    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    return (
        <div className='px-6'>
            <div class="card  bg-base-200 shadow-xl ">
                <figure><img className='w-44' src={image} alt="Album" /></figure>
                <div class="card-body text-center">
                    <h2 >{name}</h2>
                    <p><span className='font-bold'>Description:</span> {description}</p>
                    <p> <span className='font-bold'>Minimum Order quantity: </span>{minimumOderQuantity}</p>
                    <p> <span className='font-bold'>Available Quantity:</span>{availableQuantity}</p>
                    <p> <span className='font-bold'>Available Quantity:</span>{price}</p>
                    <p></p>

                </div>
            </div></div>
    );
};

export default Parchase;