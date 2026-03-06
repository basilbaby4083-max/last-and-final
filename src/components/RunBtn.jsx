import { useState } from "react";
import "./run.css";

export default function RunBtn() {
  const [position, setPosition] = useState({ top: 770, left: 800 });
  const [message, setMessage] = useState("");

  function moveButton() {
    const newTop = Math.random() * 300;
    const newLeft = Math.random() * 300;

    setPosition({ top: newTop, left: newLeft });

    const messages = [
      "Why are you trying to click No? 😭",
      "Please don't do this! 🥺",
      "How many times did I say no? Please click 'Yes' 🙂"
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(randomMessage);
  }

  function showMessage() {
    setMessage("I love you too ❤️");
  }

  return (
    <div className="main-container">
      <div>
        <h2>Do You Love Me? 😟</h2>
        <div>
          <img src="img/Bubu-Dudu-Plushies.pngw3-Photoroom.png" alt="" />
        </div>
      </div>

      <h1>{message}</h1>

      <div>
        <button id="btnone" onClick={showMessage}>
          Yes
        </button>

        <div>
          <button
            id="btntow"
            onMouseEnter={moveButton}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}