import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';

const UpdateCoffee = props => {
    const coffee=useLoaderData();
    const {_id, name,chef, supplier, taste, category, details,photo, price}=coffee;
    const handleUpdateCoffee=(e)=>{
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
        const updatedCoffee={name, chef, supplier, taste, category, details, photo,price}
        console.log(updatedCoffee);
        //send data 
        fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
        },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount) {
                Swal.fire({
                    title:'Success !!!',
                    text:'Coffee updated successfully !',
                    icon:'success',
                    confirmButtonText:`<a href='/'>Okay</a>`
                })
                
            }else{
                Swal.fire({
                    title:'Error',
                    text:"Something went wrong !!!",
                    icon:'error',
                    confirmButtonText:`<a href='/'>Okay</a>`
                    
                })
            }
        })
        .finally(()=>{
            form.reset();
            //window.open('/',parent)
        }
        )
        
    }
    return (
        <div className='bg-[#F4F3F0]'>
            <Link to={'/'}>
        <button className="btn font-rancho text-3xl hover:bg-[#D2B48C] text-gray-700 drop-shadow-md btn-outline border-none">
            <FaArrowLeft/>
            Back to Home
        </button>
        </Link>
            <form className='bg-[#F4F3F0] text-black flex flex-col py-16 px-2 gap-6' onSubmit={handleUpdateCoffee}>
            <h1 className='text-5xl font-rancho text-center' >
            Update Existing Coffee Details
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
                    <input type="text" placeholder={name} className="input input-bordered w-full bg-white" 
                    name='name'
        defaultValue={name}
                    />
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Brand 
                        </span>
                    </label>
                    <input type="text" placeholder={chef} className="input input-bordered w-full bg-white" name='chef' defaultValue={chef}
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Supplier
                        </span>
                    </label>
                    <input type="text" placeholder={supplier} className="input input-bordered w-full bg-white" name='supplier' defaultValue={supplier}/>
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Taste
                        </span>
                    </label>
                    <input type="text" placeholder={taste} className="input input-bordered w-full bg-white" name='taste' defaultValue={taste}/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Category
                        </span>
                    </label>
                    <input type="text" placeholder={category} className="input input-bordered w-full bg-white" name='category' defaultValue={category}/>
                </div>
                <div className='lg:w-1/2'>
                    <label className='label'>
                        <span>
                        Details
                        </span>
                    </label>
                    <input type="text" placeholder={details} className="input input-bordered w-full bg-white" name='details' defaultValue={details}/>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 gap-6">
                <div className='lg:w-1/2'>
                <label className='label'>
                    <span>
                        Photo
                    </span>
                </label>
                <input type="text" placeholder={photo} className="input input-bordered w-full bg-white" name='photo'
                defaultValue={photo}
                />
                </div>
                <div className='lg:w-1/2'>
                <label className='label'>
                    <span>
                        Price
                    </span>
                </label>
                <input type="text" placeholder={price} className="input input-bordered w-full bg-white" name='price' defaultValue={price}/>
                </div>
            </div>
            <button className='font-rancho btn border-[#331A15] bg-[#D2B48C] m-4 text-black hover:bg-white'
            type='submit'
            >
            Update Coffee Details
            </button>
            </form>
        </div>
    );
};

UpdateCoffee.propTypes = {
    
};

export default UpdateCoffee;