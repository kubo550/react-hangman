import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return wrongLetters.length ?  (
        <div className="wrong-letters-container">
            <h3>Wrong Letters:</h3>
            <div> {wrongLetters.join(',')} </div>
        </div>
    ) : null
}

export default WrongLetters
