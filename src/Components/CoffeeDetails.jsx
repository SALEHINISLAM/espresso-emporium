import React from "react";
import PropTypes from "prop-types";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const CoffeeDetails = ({ id }) => {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, price } =
    coffee;
  return (
    <div className="bg-[#c2c2c2] text-black py-10">
      <div className="container mx-auto" style={{background:`url('https://imagizer.imageshack.com/img924/5692/Y2bfuo.png') no-repeat top right`}}>
        <Link to={'/'}>
        <button className="btn font-rancho text-3xl hover:bg-[#D2B48C] text-gray-700 drop-shadow-md btn-outline border-none">
            <FaArrowLeft/>
            Back to Home
        </button>
        </Link>
        <div className="bg-white mt-8 rounded-xl shadow-xl flex justify-around items-center flex-col md:flex-row bg-opacity-60">
          <div className="w-full md:w-1/2 lg:w-1/3">
          <figure>
            <img
              src={`${photo}`}
              alt="coffee"
            />
          </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title">Coffee: {name}</h2>
            <p>Brand: {chef}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Details: {details}</p>
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeDetails.propTypes = {};

export default CoffeeDetails;
