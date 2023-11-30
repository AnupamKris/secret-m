import React from 'react'
import './Join.scss'
import { Link } from 'react-router-dom'

export const Join = () => {
  return (
    <div className="openingScreen-container">
        <div className="menu-container">
            <div className="logo">
                <span>Secret Modi</span>
            </div>
            <div className="menu-items">
                <input type="text" className='menuInput' placeholder='Enter room ID here...' />
                <div className="menu-item">
                    <span>Host game</span>
                </div>
                <div className="menu-item">
                    <Link to="/">Back to menu</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
