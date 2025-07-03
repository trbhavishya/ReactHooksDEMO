import React from "react";

function Box({ room, checked, click }) {
  const disabledStyle = !checked ? "box disabled space" : "box space";
  return (
    <div id={`box${room}`} className={disabledStyle}>
      <div className="heading">
        <input
          type="checkbox"
          name={`room${room}`}
          id={`room${room}`}
          checked={checked}
          onChange={click}
        />
        &nbsp;Room {room}
      </div>
    </div>
  );
}

export default Box;
