import React, {useState} from 'react'
import './Join.scss'
import { Link, useNavigate } from 'react-router-dom'

export const Join = () => {
    const [roomID, setRoomID] = useState('')
const navigate = useNavigate()
    const joinRoom = () => {
        navigate(`/waiting-room/${roomID}/player`)
    }
  return (
    <div className="openingScreen-container">
        <div className="menu-container">
            <div className="logo">
                <span>Secret Modi</span>
            </div>
            <div className="menu-items">
                <input type="text" className='menuInput' placeholder='Enter room ID here...' value={roomID}  onChange={(e)=>{setRoomID(e.target.value)}}/>
                <div className="menu-item" onClick={joinRoom}>
                    <span>Join game</span>
                </div>
                <div className="menu-item">
                    <Link to="/">Back to menu</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
