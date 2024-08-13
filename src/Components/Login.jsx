import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Providers/AuthProviders';
import { useLoaderData } from 'react-router-dom';

const Login = props => {
    const {signIn, setUser}=useContext(AuthContext)
    const users=useLoaderData()
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.currentTarget;
        const email=form.email.value;
        const password=form.password.value;
        console.log(form.email.value, form.password.value);
        signIn(email, password)
          .then(result=>{
          console.log(result.user);
          setUser(result.user)
          const getUser=users.find(user=>user.email===email)
          if (getUser) {
            console.log(getUser);
            toast.success('Hi'+ getUser.name);
          }
          })
          .catch(error=>{
          console.log(error);
          toast.error('Something went wrong')
          })
    }
    return (
        <div>
      <ToastContainer></ToastContainer>
      <form className="card-body bg-[#c2c2c2]" onSubmit={handleLogin}>
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
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
        <h3 className="text-black text-center text-xl">
            Do not Have an account ? <a href="/signup" className='text-blue-800'>
                SignUp
            </a>
        </h3>
      </form>
    </div>
    );
};

Login.propTypes = {
    
};

export default Login;