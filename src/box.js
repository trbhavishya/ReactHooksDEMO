import React from "react";

const box = ({ room, checked, click }) => {
  const disabledStyle = !checked ? "box disabled space" : "box space";
  return (
    <div id="box4" className={disabledStyle}>
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
};

export default box;
