import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import Stats from './Stats';
import ShowCoffee from './ShowCoffee';
import FollowUs from './FollowUs';

const Home = props => {
    return (
        <div >
            <Banner/>
            <Stats/>
            <ShowCoffee/>
            <FollowUs/>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;