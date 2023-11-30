import React from 'react'
import { Link } from 'react-router-dom'
import './OpeningScreen.scss'

export const OpeningScreen = () => {
  return (
    <div className="openingScreen-container">
        <div className="menu-container">
            <div className="logo">
                <span>Secret Modi</span>
            </div>
            <div className="menu-items">
                <div className="menu-item">
                    <Link to="/host">Host</Link>
                </div>
                <div className="menu-item">
                    <Link to="/join">Join</Link>
                </div>
                <div className="menu-item">
                    <Link to="/exit">Exit</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
