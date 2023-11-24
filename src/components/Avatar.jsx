import React from "react";

function Avatar(props) {
  return (
    <div className="Avatar">
      <img src={props.imgURL}></img>
      <p>{props.name}</p>
    </div>
  );
}

export default Avatar;
