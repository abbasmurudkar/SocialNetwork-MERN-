import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <Homes>
      <div className="card home-card">
        <div className="card-image">
          <h5>Mohd Abbas</h5>
          <img
            src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlfGVufDB8fDB8fHww"
            alt="postpic"
          />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Image Title</h6> 
          <p>This is amazing post</p>
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <div className="card-image">
          <h5>Mohd Abbas</h5>
          <img
            src="https://images.unsplash.com/photo-1494625927555-6ec4433b1571?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFuZHNjYXBlfGVufDB8fDB8fHww"
            alt="postpic"
          />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Image Title</h6> 
          <p>This is amazing post</p>
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
      <div className="card home-card">
        <div className="card-image">
          <h5>Mohd Abbas</h5>
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="postpic"
          />
        </div>
        <div className="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Image Title</h6> 
          <p>This is amazing post</p>
          <input type="text" placeholder="Add a comment" />
        </div>
      </div>
    </Homes>
  );
}

export default Home;
const Homes = styled.div`
  .home-card {
    max-width: 500px;
    height: max-content;
    margin: 26px auto;
  }
  .home-card img {
    width: 100%;
    height: 100%;
  }
`;
