import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddCoffee = props => {
    const handleAddCoffee=(e)=>{
        e.preventDefault();
        const form=e.currentTarget

        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const price=form.price.value;
        const newCoffee={name, chef, supplier, taste, category, details, photo,price}
        console.log(newCoffee);
        //send data 
        fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/coffee`,{
            method:'POST',
            headers:{
                'content-type':"application/json"
        },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.insertedId) {
                toast.success('Coffee Inserted Successfully !')
            }else{
                toast.error('Something went wrong !')
            }
        })
        form.reset();
    }
    return (
        <div className='bg-[#F4F3F0]'>
            <ToastContainer/>
            <Link to={'/'}>
        <button className="btn font-rancho text-3xl hover:bg-[#D2B48C] text-gray-700 drop-shadow-md btn-outline border-none">
            <FaArrowLeft/>
            Back to Home
        </button>
        </Link>
            <form className='bg-[#F4F3F0] text-black flex flex-col py-16 px-2 gap-6' onSubmit={handleAddCoffee}>
            <h1 className='text-5xl font-rancho text-center' >
            Add New Coffee Details
            </h1>
            <p className='text-center'>
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
            </p>
            <div className="flex flex-col lg:flex-row justify-between px-4 gap-6">
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                           Name 
                        </span>
                    </label>
                    <input type="text" placeholder="Americano Coffee" className="input input-bordered w-full bg-white" 
                    name='name'
                    />
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Brand 
                        </span>
                    </label>
                    <input type="text" placeholder="Lavazza" className="input input-bordered w-full bg-white" name='chef'/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Supplier
                        </span>
                    </label>
                    <input type="text" placeholder="Cappu Authorizer" className="input input-bordered w-full bg-white" name='supplier'/>
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Taste
                        </span>
                    </label>
                    <input type="text" placeholder="Sweet and hot" className="input input-bordered w-full bg-white" name='taste'/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Category
                        </span>
                    </label>
                    <input type="text" placeholder="Americano" className="input input-bordered w-full bg-white" name='category'/>
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Details
                        </span>
                    </label>
                    <input type="text" placeholder="Espresso with hot water" className="input input-bordered w-full bg-white" name='details'/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                <label className='label'>
                    <span>
                        Photo
                    </span>
                </label>
                <input type="text" placeholder="https://i.ibb.co/PGqMPr9/11.png" className="input input-bordered w-full bg-white" name='photo'/>
                </div>
                <div className='lg:w-1/2'>
                <label className='label'>
                    <span>
                        Price
                    </span>
                </label>
                <input type="text" placeholder="1127 Taka" className="input input-bordered w-full bg-white" name='price'/>
                </div>
            </div>
            <button className='font-rancho btn border-[#331A15] bg-[#D2B48C] m-4 text-black hover:bg-white'
            type='submit'
            >
            Add Coffee Details
            </button>
            </form>
        </div>
    );
};

AddCoffee.propTypes = {
    
};

export default AddCoffee;