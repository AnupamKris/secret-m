import React from 'react'
import './Host.scss'
import { v4 } from 'uuid'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Host = () => {
    const [roomid, setRoomid] = useState(v4().slice(0,6))
    const navigate = useNavigate()
    const createGame = () => {
        console.log("Request iniated!")
        navigate(`/waiting-room/${roomid}/host`)
    }
    // async function createGame(){
    //     console.log("Request iniated!")
    //     await axios.post('http://localhost:5000/hostGame', {
    //         roomid: roomid
    //     })
    //     .then((response)=>{
    //         console.log(response['data'])
    //         navigate(`/waiting-room/${roomid}/host`)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    

  return (
    <div className="openingScreen-container">
        <div className="menu-container">
            <div className="logo">
                <span>Secret Modi</span>
            </div>
            <div className="menu-items">
                <div className="menu-item">
                    <span style={{fontSize:'1em'}}>Room ID - </span><span style={{fontWeight:800, color:'#BF3326'}}>{ roomid }</span>
                </div>
                <div className="menu-item" style={{}} onClick={()=>{createGame()}}>
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
