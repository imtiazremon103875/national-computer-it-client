import React from 'react';

const BussinessCard = ({ item }) => {
    const { icon, number, headline } = item
    return (
        <div className="card w-96 bg-gray-200 shadow-xl text-center">
            <div className="card-body">
                <span className='text-primary'>{icon}</span>
                <p className='text-2xl'>{number}</p>
                <p className='text-2xl'>{headline}</p>

            </div>
        </div>
    );
};

export default BussinessCard;