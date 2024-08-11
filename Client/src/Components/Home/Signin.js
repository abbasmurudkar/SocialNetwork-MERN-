import React, { useState } from 'react'
import "../../App.css"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Signin() {

  return (
    <div className='my_card' style={{marginTop:"60px"}}>
      <Card className='card input-field'>
        <h2>Instabook</h2>
        <input  type='text' placeholder='Email'/>
        <input  type='text' placeholder='password'/>
        <button className="btn waves-effect waves-light #ef5350 red lighten-1" type="submit" name="action">Sign In</button>
        <h6><Link to="/signup">Register to create account</Link></h6>
      </Card>
      
    </div>
  )
}

export default Signin

export const Card = styled.div`
padding: 30px;
max-width: 400px;
margin: 10px auto;
text-align: center;
`;