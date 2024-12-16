import React from 'react'
import {  NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div style={{display : 'flex' , justifyContent : 'space-around' , fontSize : '35px'}}>
<NavLink  style={{textDecoration : 'none'}} to ='/Home'>Home</NavLink>
<NavLink  style={{textDecoration : 'none'}} to ='/About'>About</NavLink>
<NavLink  style={{textDecoration : 'none'}} to ='/Product'>Product</NavLink>
<NavLink  style={{textDecoration : 'none'}} to ='/Allproduct'>Product Listings</NavLink>

<NavLink  style={{textDecoration : 'none'}} to ='/Login'>Login</NavLink>


      
    </div>
  )
}

export default Navbar