import React from 'react'
import './Game.scss'

export const Game = () => {
  return (
    <div className="game-container">
      <div className="logo">
        <span>Secret Modi</span>
      </div>
      <div className="player-order-container">
        <div className="player-order-card">
          <span>Player 1</span>
        </div>
        <div className="player-order-card">
          <span>Player 2</span>
        </div>
        <div className="player-order-card">
          <span>Player 3</span>
        </div>
        <div className="player-order-card">
          <span>Player 4</span>
        </div>
        <div className="player-order-card">
          <span>Player 5</span>
        </div>
      </div>
      <div className="fascist-container">

      </div>
      <div className="liberal-container">

      </div>
    </div>
  )
}
