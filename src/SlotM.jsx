import React from "react";
const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;
  if (x === y && y === z) {
    return (
      <div>
        <h1>
          {x} {y} {z}{" "}
        </h1>
        <h1 className="emoji">This is Match!</h1>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {x} {y} {z}{" "}
        </h1>
        <h1 className="emoji">This is not Match!</h1>
        <hr />
      </div>
    );
  }
};
export default SlotM;
