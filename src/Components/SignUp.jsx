import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProviders";
import { toast, ToastContainer } from "react-toastify";

const SignUp = (props) => {
  const {createUser, setUser}=useContext(AuthContext)

    const handleSignUp=(e)=>{
        e.preventDefault();
        const form=e.currentTarget;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.name.value;
        console.log(form.email.value, form.password.value);
        createUser(email, password)
          .then(result=>{
          console.log(result.user);
          setUser(result.user)
          
          const user={email, name}

          fetch(`http://localhost:5000/user`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if (data.insertedId) {
              toast.success('user created successfully')
            }
          })
          })
          .catch(error=>{
          console.log(error);
          })
    }
  return (
    <div>
      <ToastContainer></ToastContainer>
      <form className="card-body bg-[#c2c2c2]" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-800">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-800">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered bg-white text-black"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-800">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered bg-white text-black"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">SignUp</button>
        </div>
        <h3 className="text-black text-center text-xl">
          Already Have an account? <a href="/login" className="text-blue-800">Login</a>
        </h3>
      </form>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
