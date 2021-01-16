import React from 'react'

const Word = ({ currentWord, correctLetters  }) => {
    const currentWordArrat = currentWord.split('')
    return (
        <div className="word">
            {currentWordArrat.map((letter, i) => (
              <p key={i} className="letter">  { correctLetters.includes(letter) ? letter : '' } </p>
            ))}
        </div> 
    )
}

export default Word
