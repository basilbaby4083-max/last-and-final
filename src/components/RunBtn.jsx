import { useState } from "react";
import "./run.css";

export default function RunBtn() {
  const [position, setPosition] = useState({ top: 480, left: 197 });
  const [message, setMessage] = useState("");
  const [showYesImage, setShowYesImage] = useState(false);
  const [showNoGif, setShowNoGif] = useState(false);

  function moveButton() {
    const newTop = Math.random() * 300;
    const newLeft = Math.random() * 300;

    setPosition({ top: newTop, left: newLeft });

    const messages = [
      "Why are you trying to click No? 😭",
      "Please don't do this! 🥺",
      "How many times did I say no? Please click 'Yes' 🙂",
      "please....🥺 👉👈",
      "you dont love me?🥺💔",
      "but why😭",
      "Aren’t I innocent?🙂",
      "I will cry😢",

      "Why are you so mean? 😭",
      "Come on… just press Yes 😭",
      "Don't break my heart 💔🥺",
      "I trusted you 😢",
      "Please think again 😭",
      "You are hurting me 🥺",
      "Why are you doing this to me 😭",
      "Just one click on Yes please 🥺",
      "I am begging you 🥺🙏",
      "Please don't say No again 😭",
      "You are making me sad 😢",
      "I thought you liked me 🥺",
      "My heart can't take this 💔",
      "Please be nice 😭",
      "Don't reject me again 🥺",
      "You are breaking my feelings 💔",
      "Why are you ignoring me 😭",
      "Please give me a chance 🥺",
      "Don't make me cry 😢",
      "Are you really going to press No again? 😭",
      "Think carefully before clicking 🥺",
      "You still have time to choose Yes 🙂",
      "Don't do this to me please 😭",
      "I will be very sad 🥺",


      "You are my only hope 😢",
      "Please change your mind 😭",
      "I believe in you 🥺",
      "Don't destroy my happiness 💔",
      "Why are you like this 😭",
      
      "Just click Yes and make me happy 🥺",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    setMessage(randomMessage);
    setShowNoGif(true);
    setShowYesImage(false);
  }

  function showMessage() {
    setMessage(
      "🌹 Love you forever and always 💞 💘 You are my heart ❤️ 💎 I'm so lucky to have you 💖",
    );
    setShowYesImage(true);
    setShowNoGif(false);
  }

  return (
    <div className="main-container">
      <div>
        <h2>Do You Love Me? 😟</h2>
        <span>Please dont click the NO nutton</span>
        <div>
          <div>
            {showNoGif && <img src="gif/tkthao219-bubududu.gif" alt="" />}
          </div>
          {showYesImage && (
            <img src="img/Bubu-Dudu-Plushies.pngw3-Photoroom.png" alt="" />
          )}
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
              left: position.left,
              right:position.right
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
