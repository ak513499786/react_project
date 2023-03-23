import React, { useState } from "react";
import "./work.css";

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
    >
      <img
        className="image"
        src="https://picsum.photos/200"
        alt="ExampleImage"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {hovered && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPos.x - 50 + "px",
            top: cursorPos.y - 50 + "px"
          }}
        >
          <div className="custom-cursor-circle">
            <span className="custom-cursor-text">View</span>
          </div>
        </div>
      )}
    </div>
  );
}
