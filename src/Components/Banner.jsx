import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
    const [touch, setTouch]=useState(false);
    return (
        <div style={{backgroundImage:`url('https://imagizer.imageshack.com/img923/2799/I6zpt4.png')`, backgroundSize:'100% 100%', backgroundRepeat:'no-repeat', height:'100%',width:'100%'}} className='grid grid-cols-1 lg:grid-cols-2 min-h-[800px]' onMouseEnter={()=>setTouch(true)}
        onMouseLeave={()=>setTouch(false)}
        >
            <div className=""></div>
            <div className="text-white flex flex-col justify-center items-baseline gap-6 px-6">
                <div>
                <h2 className='text-6xl font-rancho text-left'>
                Would you like a Cup of Delicious Coffee?
                </h2>
                </div>
                <p>
                {`It's`} coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable. 
                </p>
                <div>
                <button className={`btn text-black font-rancho text-2xl bg-[#E3B577] hover:bg-white ${touch && 'btn-outline bg-transparent text-white'}`}>
                    Learn More
                </button>
                </div>
            </div>
            
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;