import React from 'react';
import PropTypes from 'prop-types';

const Stats = props => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className="container mx-auto bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-6">
                <div className="flex flex-col gap-4 justify-center items-baseline">
                    <img src="https://imagizer.imageshack.com/img922/4964/3CCI2k.png" alt="" />
                    <h3 className='text-3xl font-rancho text-[#331A15]'>
                    Awesome Aroma
                    </h3>
                    <p className='text-[#331A15]'>
                    You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-4 justify-center items-baseline">
                    <img src="https://imagizer.imageshack.com/img923/5809/tIgxwD.png" alt="" />
                    <h3 className='text-3xl font-rancho text-[#331A15]'>
                    High Quality
                    </h3>
                    <p className='text-[#331A15]'>
                    We served the coffee to you maintaining the best quality
                    </p>
                </div>
                {/* 3 */}
                <div className="flex flex-col gap-4 justify-center items-baseline">
                    <img src="https://imagizer.imageshack.com/img924/5087/njsDjV.png" alt="" />
                    <h3 className='text-3xl font-rancho text-[#331A15]'>
                    Pure Grade
                    </h3>
                    <p className='text-[#331A15]'>
                    The coffee is made of the green coffee beans which you will love
                    </p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-baseline">
                    <img src="https://imagizer.imageshack.com/img922/605/4P0r8r.png" alt="" />
                    <h3 className='text-3xl font-rancho text-[#331A15]'>
                    Proper Roasting
                    </h3>
                    <p className='text-[#331A15]'>
                    Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

Stats.propTypes = {
    
};

export default Stats;