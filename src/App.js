import React, { useState, useEffect } from "react";
import {
  Header,
  Figure,
  WrongLetters,
  Word,
  Popup,
  // Notification,
} from "./components";

import "./css/app.css";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [currentWord, setCurrentWord] = useState("abcdefg".toLocaleLowerCase());
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  useEffect(() => {
    const currentWordArray = Array.from(new Set(currentWord.split("")));
    if (correctLetters.length === currentWordArray.length) {
      setGameOver(true);
      setWin(true);
    }
    if (wrongLetters.length > 5) {
      setGameOver(true);
    }
    const handleKey = e => {
      let { key, keyCode } = e;
      key = key.toLocaleLowerCase();
      if (keyCode >= 65 && keyCode <= 90 && !gameOver) {
        if (correctLetters.includes(key) || wrongLetters.includes(key)) {
          return console.log("juz było");
        }
        currentWordArray.includes(key)
          ? setCorrectLetters(prev => [...prev, key])
          : setWrongLetters(prev => [...prev, key]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentWord, wrongLetters, correctLetters, gameOver]);

  const gameReset = () => {
    setWin(false);
    setWrongLetters([]);
    setCorrectLetters([]);
    setCurrentWord("drugiesłowo");
    setGameOver(false);
  };

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure mistakes={wrongLetters.length} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word currentWord={currentWord} correctLetters={correctLetters} />
      </div>
      {gameOver ? (
        <Popup win={win} currentWord={currentWord} gameReset={gameReset} />
      ) : null}
    </>
  );
}

export default App;
