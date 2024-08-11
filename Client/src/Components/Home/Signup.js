import React, { useState } from "react";
import { Card } from "./Signin";
import { Link, useNavigate } from "react-router-dom";
import M from 'materialize-css'
const Signup = () => {
  const navigate = useNavigate();
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [password, SetPassword] = useState("");
  // STATEFUNCTION

  
  const inputchange = (e) => {
    Setname(e.target.value);
  };
  const OnsetEmail = (e) => {
    Setemail(e.target.value);
  };
  const OnsetPassword = (e) => {
    SetPassword(e.target.value);
  };
//   const onkeydown = (ev) => {
//     if (ev.key === "Enter") {
//         PostData()
//     }
// }
   const PostData  = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "Invalid Email",classes:"#ef5350 red lighten-1"})
      return
    }
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })

    }).then(res=>res.json()).then(data=>{
      if(data.error){
        M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
      }
      else{
        M.toast({html: data.message,classes:"#1de9b6 teal accent-3"})
        navigate("/signin");
      }
    })
  }
  return (
    <div className="my_card" style={{ marginTop: "30px" }}>
      <Card2 className="card input-field">
        <h2>Instabook</h2>
        <input
          type="text"
          value={name}
          onChange={inputchange}
          placeholder="Name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={OnsetEmail}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={OnsetPassword}
        />
        <button
          className="btn waves-effect waves-light #ef5350 red lighten-1"
          type="submit"
          name="action"
          onClick={()=>PostData()}
          
        >
          Sign Up
        </button>
        <h6>
          <Link to="/signin"> Already have account ?</Link>
        </h6>
      </Card2>
    </div>
  );
};

export default Signup;

const Card2 = Card;
