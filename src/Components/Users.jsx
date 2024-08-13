import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers]=useState(loadedUsers);
  const handleDelete=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    .then(result=>{
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`,{
          method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
          if (data.deletedCount>0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const nowUsers=loadedUsers.filter(user=>user._id!==id)
            setUsers(nowUsers)
          }else{
            Swal.fire({
              text: "Something went wrong . Please try again later ...",
              icon: "error",
            });
          }
        })
      }
    })
  }
  return (
    <div className="bg-[#c2c2c2] pb-10">
      <h2 className="text-black text-center font-bold text-3xl pt-10 pb-6">
        Users
      </h2>
      <div className="container mx-auto  bg-white text-black">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{parseInt(index) + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn p-2" onClick={()=>handleDelete(user._id)}>
                        <MdDelete className="size-8"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
