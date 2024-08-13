import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TiCoffee } from "react-icons/ti";
import CoffeeCard from './coffeeCard';
const ShowCoffee = props => {
    const [coffees, setCoffees]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/coffee`)
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[])
    return (
        <div className="bg-white">
            <div style={{position:'relative', background:`url('https://imagizer.imageshack.com/img923/7936/05eMvY.png') no-repeat top left , url('https://imagizer.imageshack.com/img923/9519/JUpHoe.png') no-repeat right bottom`}}>
            <div className="z-10  min-h-[1400px] container mx-auto flex flex-col justify-center items-center py-16 px-4 text-black gap-6">
            <h4 className='text-xl'>
                --Sip and Savour--
            </h4>
            <h2 className='text-6xl font-rancho text-center  drop-shadow-2xl'>
            Our Popular Products
            </h2>
            <button className='btn border bg-[#E3B577] flex justify-center items-center border-[#331A15] hover:bg-slate-600' onClick={()=>window.open('/addCoffee')}>
                <h3 className='text-white font-rancho text-2xl drop-shadow-xl stroke-black shadow-[#331A15]'>
                    Add Coffee
                </h3>
                <TiCoffee className='text-[#331A15] size-8 '/>
            </button>

                <section className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-8 p-4'>
                    {
                        coffees.map((coffee,index)=><CoffeeCard coffee={coffee} key={index}/>
                        )
                    }
                </section>

            </div>
        </div>
        </div>
    );
};

ShowCoffee.propTypes = {
    
};

export default ShowCoffee;