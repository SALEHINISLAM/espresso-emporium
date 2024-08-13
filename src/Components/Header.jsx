import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = props => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut();
        window.open('/',parent)
    }
    return (
        <div style={{ backgroundImage:`url('https://imagizer.imageshack.com/img923/364/qjT4hZ.jpg')`, backgroundSize:'cover', height:'100%', width:'100%', backgroundRepeat:'no-repeat'}}>
            <Link to={'/'}>
            <div className="flex justify-center items-center">
               <img src="https://imagizer.imageshack.com/img924/5564/PGayhF.png" alt="" className='h-14' /> 
                <h2 className='font-rancho text-white font-semibold text-4xl'>
                    Espresso Emporium
                </h2>
            </div>
            </Link>
            <div className="text-center">
            <NavLink to={'/'} className={({isActive})=>isActive?'active underline text-white font-bold':'text-white'}>
                <button className='btn btn-outline'>
                    Home
                </button>
            </NavLink>
            <NavLink to={'/users'} className={({isActive})=>isActive?'active underline text-white font-bold':'text-white'}>
                <button className='btn btn-outline'>
                    Users
                </button>
            </NavLink>
            <NavLink to={'/addCoffee'} className={({isActive})=>isActive?'active underline text-white font-bold':'text-white'}>
                <button className='btn btn-outline'>
                    Add Coffee
                </button>
            </NavLink>
            <button className='btn btn-outline'>{
                user ? <button onClick={handleLogOut}>Logout</button>: <Link to={'/login'}>Login</Link>
            }</button>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;