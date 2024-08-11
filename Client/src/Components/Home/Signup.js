import React, { useState } from "react";
import { Card } from "./Signin";
import { Link } from "react-router-dom";

const Signup = () => {
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
  const PostData = ()=>{
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:"",
        email:"",
        password:""
      })

    }).then(res=>res.json()).then(data=>{
      console.log(data)
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
          type="text"
          placeholder="Email"
          value={email}
          onChange={OnsetEmail}
        />
        <input
          type="text"
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
