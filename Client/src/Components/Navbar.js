import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import styled from "styled-components";
const Navbar = () => {
  return (
    <Navs>
    <nav>
    <div className="nav-wrapper background">
      <Link to="/" className="brand-logo left">InstaBook</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/signin">SignIn</Link></li>
        <li><Link to="/signup" >SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create Post</Link></li>

      </ul>
    </div>
  </nav>
  </Navs>
  )
}

export default Navbar

const Navs = styled.div`

`;