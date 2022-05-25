import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Best from './Best';
import Business from './Business';
import Contact from './Contact';
import Parts from './Parts';
import Reviews from './Reviews';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Best></Best>
            <Reviews></Reviews>
            <Business></Business>
            <Contact></Contact>

            <Footer></Footer>
        </div>
    );
};

export default Home;