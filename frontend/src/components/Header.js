import React from 'react';
import { NavLink } from 'react-router-dom';

const handleLoginRender = (isLoggedIn) => {
  if(isLoggedIn){
    return (
      <>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/userpage'> Profile </NavLink>
        <NavLink to='/logout'> Logout </NavLink>
      </>  
    )
  }else{
    return (
      <ul className='list-header'>
        <NavLink to='/login'> Login </NavLink>/
        <NavLink to='/signup'> Signup </NavLink>
      </ul>
    )
  }
}

const Header = (props) => {

  return (
    <div className='navbar'>
    
        {handleLoginRender(props.isLoggedIn)}

    </div>
  )
}

export default Header;

 {/* <NavLink to='/'> Home </NavLink>
          <NavLink to='/userpage'> Profile </NavLink> */}