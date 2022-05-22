import React from 'react';

const Part = ({ part }) => {
    const { name, description, image, minimumOderQuantity, availableQuantity, price } = part
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-44' src={image} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p><span className='font-bold'>Description:</span> {description}</p>
                <p> <span className='font-bold'>Minimum Order quantity: </span>{minimumOderQuantity}</p>
                <p> <span className='font-bold'>Available Quantity:</span>{availableQuantity}</p>
                <p> <span className='font-bold'>Available Quantity:</span>{price}</p>
                <p></p>
                <div class="card-actions justify-center ">
                    <button class="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;