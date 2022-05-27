import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('https://protected-spire-73262.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-8 text-primary'>Our Parts</h2>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    parts.map(part => <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;

