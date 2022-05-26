import React from 'react';
import pic1 from '../../Image/portfolio/portfolio.jpg'

const Myportfolio = () => {
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-primary mt-8'>This is My Portfolio</h2>

            <div className='flex justify-center items-center h-screen mt-40'>

                <div className="card w-72 bg-base-100 shadow-xl text-center ">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div >

                        <p className='mt-8'> <span className='font-bold '>Name</span>: Muhammad Imtiajul Amin </p>
                        <p className='mt-8'><span className='font-bold'>Email</span> : Imtiazremon103875@gmail.com</p>
                        <p className='mt-8'> <span className='font-bold'>Educational Background</span>:M.sc in Computer science and Engineering from Port City University Bangladesh</p>

                        <p className='mt-8'><span className='font-bold'>Skill of mine as a Web developer </span> 1.html 2.css 3.bootstrap 4.tailwind 5.vanilla js 5.react js 6.node js 7.mongo db </p>
                        <p className='mt-8'><span className='font-bold'>Three  website of mine</span> 1. <a href=' https://gym--equipment-warehouse.web.app/home' className='text-secondary'> Gym wareHouse</a> 2.<a href='https://colour-balance-website.firebaseapp.com/?fbclid=IwAR0CCJeWqUEbvbmp5XDVTnRZhneRRcq-B9InU2-Aut8hKBvJu-JY8b72ah8' className='text-secondary'> Colour Balance Website</a> 3.<a href='https://adorable-fudge-7a97bb.netlify.app/' className='text-secondary'> Movie lover Bangladesh Website</a></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;