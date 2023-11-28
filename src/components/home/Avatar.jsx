import React from "react";

function Avatar(props) {
  return (
    <div className="Avatar">
      <div className="avatar-img"><img src={props.imgURL} alt="Iets met Scouting."></img></div>
      <p>{props.name}</p>
    </div>
  );
}

export default Avatar;
