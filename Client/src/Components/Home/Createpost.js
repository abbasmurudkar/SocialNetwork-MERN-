import React from "react";
import styled from "styled-components";

function Createpost() {
  return (
    <Card className="card input-field" style={{}}>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="description" />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #ef5350 red lighten-1" type="submit" name="action">Submit Post</button>
    </Card>
  );
}

export default Createpost;
const Card = styled.div`
  margin: 30px auto;
  max-width: 500px;
  padding: 20px;
  text-align: center;
`;
