import React from "react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee }) => {
  const { _id, photo, name, chef, price } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-git-main-salehinislams-projects.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                text: "Something went wrong . Please try again later ...",
                icon: "error",
              });
            }
          })
          .finally(window.open("/", parent));
      }
    });
  };
  return (
    <div className="w-full">
      <div className="card card-side bg-[#F5F4F1] bg-opacity-50 shadow-xl">
        <figure>
          <img
            src={`${
              photo
                ? photo
                : "https://imagizer.imageshack.com/img924/5564/PGayhF.png"
            }`}
            alt="coffee"
          />
        </figure>
        <div className="card-body flex flex-row justify-around items-center">
          <div className="flex flex-col gap-6">
            <h2 className="card-title">
              <span className="font-bold">Name: </span>
              {name}
            </h2>
            <h2 className="card-title">
              <span className="font-bold">Brand: </span>
              {chef}
            </h2>
            <h2 className="card-title">
              <span className="font-bold">Price: </span>
              {price}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn bg-[#D2B48C] text-white border-none p-2">
              <FaEye className="size-6" />
            </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn bg-[#3C393B] text-white border-none p-2">
                <FaPen className="size-6" />
              </button>
            </Link>
            <button
              className="btn bg-[#3C393B] text-white border-none p-2"
              onClick={() => handleDelete(_id)}
            >
              <MdDelete className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeCard;
