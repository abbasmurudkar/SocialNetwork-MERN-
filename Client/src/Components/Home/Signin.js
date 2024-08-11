import React, { useState } from 'react'
import "../../App.css"
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'

function Signin() {
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");

  const onEmailChange = (e)=>{
    Setemail(e.target.value)
  }
  const onPasswordChange = (e)=>{
    SetPassword(e.target.value)
  }

  const PostData  = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid Email",classes:"#ef5350 red lighten-1"})
      return
    }
    fetch("/signin",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })

    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data.error){
        M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
      }
      else{

        M.toast({html: "Successfully SignedIn",classes:"#1de9b6 teal accent-3"})
        navigate("/");
      }
    })
  }

  return (
    <div className='my_card' style={{marginTop:"60px"}}>
      <Card className='card input-field'>
        <h2>Instabook</h2>
        <input  type='text' placeholder='Email' value={email} onChange={onEmailChange}/>
        <input  type='password' placeholder='Password' value={password} onChange={onPasswordChange}/>
        <button className="btn waves-effect waves-light #ef5350 red lighten-1" type="submit" name="action" onClick={PostData}>Sign In</button>
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