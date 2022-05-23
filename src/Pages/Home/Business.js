import React from 'react';
import { faCoffee, faFlag, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BussinessCard from './BussinessCard';

const Business = () => {
    const bussiness = [
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faFlag} />,
            number: '52',
            headline: 'Countries',
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faUser} />,
            number: '333+',
            headline: 'Happy client',
        },
        {
            icon: <FontAwesomeIcon className='fa-7x' icon={faThumbsUp} />,
            number: '500+',
            headline: 'Feedbacks',
        }

    ]
    return (
        <div>
            <h2 className='text-center text-4xl text-black my-8'>Million Bussiness Trust Us</h2>
            <p className='text-center my-8 text-3xl'>Try To Understand Users Expectation</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6'>
                {
                    bussiness.map((item, index) => <BussinessCard key={index} item={item}></BussinessCard>)
                }
            </div>
            <div className='bg-gray-200 m-8 p-8 flex justify-between items-center'>
                <div className='lg:w-1/2'>
                    <h2 className='text-3xl font-bold text-accent'>Have a question  about us or got a product request?</h2>
                    <p className='text-3xl mt-4 text-accent'>Don't hasitate to contact us?</p>
                </div>
                <div className='lg-w-1/2 lg:flex justify-evenly w-full'>
                    <button className="btn btn-active btn-accent md:block mb-5 mr-5">Contact Us </button>
                    <button className="btn btn-active btn-secondary md:block "> Give Feedback</button>
                </div>

            </div>
        </div>
    );
};

export default Business;