import React from "react";
import Avatar from "./Avatar";
import scouts from "../../data/scouts";

function MyScouts() {
  return (
    <div className="myScoutsContainer">
      <h1>Onze Scouts</h1>
      <div className="myScoutsList">
        {scouts.map((scout) => {
          return (
            <Avatar
              key={scout.id}
              name={scout.name}
              imgURL={scout.imgURL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyScouts;
