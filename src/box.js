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
      <div className="body">
        <div className="adult ">
          <label>Adults (18+)</label>
          <select className="dropdown" id="room4adult" disabled={!checked}>
            <option>0</option>
            <option>1</option>
          </select>
        </div>
        <div className="children">
          <label>Children (18+)</label>
          <select className="dropdown" id="room4children" disabled={!checked}>
            <option>0</option>
            <option>1</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default box;
