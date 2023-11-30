import React from 'react'
import './WaitingRoom.scss'

export const WaitingRoom = () => {
    const roomid = "ABCD"
  return (
    <div className="waiting-room-container">
        <div className="logo">
            <span>Secret Modi</span>
        </div>
        <div className="roomcode">
            <span>Room code - {roomid}</span>
        </div>
        <div className="userpool-container">
            <div className="userpool-cards">
                <div className="userpool-card">
                    <span>Player 1</span>
                </div>
                <div className="userpool-card">
                    <span>Player 2</span>
                </div>
                <div className="userpool-card">
                    <span>Player 3</span>
                </div>
                <div className="userpool-card">
                    <span>Player 4</span>
                </div>
                <div className="userpool-card">
                    <span>Player 5</span>
                </div>
                <div className="userpool-card">
                    <span>Player 6</span>
                </div>
            </div>
        </div>
        <div className="waitingroom-options">
            <div className="waitingroom-option">
                <span>Start Game</span>
            </div>
            <div className="waitingroom-option">
                <span>Leave Game</span>
            </div>
        </div>
    </div>
  )
}
