import React from 'react';
import Footer from '../Shared/Footer';

import Banner from './Banner';
import Business from './Business';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Business></Business>

            <Footer></Footer>
        </div>
    );
};

export default Home;