import React from 'react'

const Popup = ({ win, currentWord, gameReset }) => {
    return (
        <div className="popup-container" >
            <div className="popup">
                <h2> {win ? 'Brawo, jesteś mistrzem!' : 'Spróbuj jeszcze raz!'} </h2>
                <h3> Odgadywane słowo to {currentWord}  </h3>
                <button onClick={() => gameReset()} >Play Again</button>
            </div>
        </div>
    )
}

export default Popup
