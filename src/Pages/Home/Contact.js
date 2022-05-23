import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const Contact = () => {
    const contact = [
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faPhone} />,
            medium: "Phone",
            item: "01xxxxxxxxx"
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faMapMarkerAlt} />,
            medium: "Address",
            item: "Baddurtala,chittagong"
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faMailBulk} />,
            medium: "Email",
            item: "imtiazremon@gmail.com"
        }
    ]
    return (
        <div className='px-6'>
            <h2 className='text-3xl text-center text-primary'>Contact</h2>
            <p className='text-center text-xl'>We'are avialable for any query</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    contact.map((element, index) => <div key={index}> <div className="card lg-w-mx bg-black shadow-xl rounded-full text-white text-center p-6">
                        <div className="card-body">
                            <span className='text-2xl'>{element.icon}</span>
                            <p className='text-2xl'>{element.medium}</p>
                            <p className='text-xl'>{element.item}</p>
                        </div>
                    </div> </div>)
                }
            </div>

        </div>
    );
};

export default Contact;