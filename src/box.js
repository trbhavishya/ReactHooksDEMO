import React from "react";

const box = ({ room, checked, click }) => {
  return (
    <div
      className={`box space${!checked ? " disabled" : ""}`}
      style={{
        border: checked ? "2px solid #4F8A8B" : "2px solid #ccc",
        borderRadius: "12px",
        background: checked
          ? "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)"
          : "#f5f5f5",
        boxShadow: checked
          ? "0 4px 16px rgba(79,138,139,0.15)"
          : "0 2px 8px rgba(0,0,0,0.05)",
        margin: "16px",
        padding: "24px 20px",
        minWidth: "180px",
        maxWidth: "220px",
        display: "inline-block",
        transition: "all 0.3s",
        opacity: checked ? 1 : 0.6,
        cursor: "pointer",
      }}
    >
      <div
        className="heading"
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: checked ? "#333" : "#888",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          name={`room${room}`}
          id={`room${room}`}
          checked={checked}
          onChange={click}
          style={{
            width: "20px",
            height: "20px",
            accentColor: "#4F8A8B",
            marginRight: "10px",
          }}
        />
        Room {room}
      </div>
    </div>
  );
};

export default box;
