import React from 'react';
import PropTypes from 'prop-types';

const FollowUs = props => {
    return (
        <div className='bg-white'>
            <div className="container mx-auto text-center p-4 py-12">
                <h4 className='text-xl text-gray-600'>
                    Follow Us Now
                </h4>
                <h2 className='text-5xl font-semibold text-[#331A15] drop-shadow-lg font-rancho'>
                    Follow on Instagram
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-8">
                    <img src="https://imagizer.imageshack.com/img922/2499/9mB0BM.png" alt="" />
                    <img src="https://imagizer.imageshack.com/img923/5964/aQX7H9.png" alt="" />
                    <img src="https://imagizer.imageshack.com/img923/5374/mwIl4H.png" alt="" />
                    <img src="https://imagizer.imageshack.com/img922/5034/JUYLyX.png" alt="" className='hidden sm:flex'/>
                    <img src="https://imagizer.imageshack.com/img924/4739/YLSWTh.png" alt="" className='hidden md:flex'/>
                    <img src="https://imagizer.imageshack.com/img924/3049/GK557C.png" alt="" className='hidden md:flex'/>
                    <img src="https://imagizer.imageshack.com/img922/586/Sdb1Oo.png" alt="" className='hidden lg:flex'/>
                    <img src="https://imagizer.imageshack.com/img923/3793/NI4DRr.png" alt="" className='hidden lg:flex'/>
                </div>
            </div>
        </div>
    );
};

FollowUs.propTypes = {
    
};

export default FollowUs;