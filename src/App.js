import React from "react";
import "./styles.css";
import SlotM from "./SlotM";

export default function App() {
  return (
    <>
      <div className="game">
        <h1 className="heading_style">
          🎰 Welcome to <span className="brand">Slot-machine Game</span> 🎰{" "}
        </h1>
        <div className="table">
          <SlotM x="❤️" y="❤️" z="❤️" />
          <SlotM x="🍎" y="🍌" z="🍌" />
          <SlotM x="😄" y=" 😄" z=" 😏 " />
        </div>
      </div>
    </>
  );
}
