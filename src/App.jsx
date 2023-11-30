import { useState } from 'react'
import {Home} from './components/Home'
import {OpeningScreen} from './components/OpeningScreen'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { Host } from './components/Host'
import { Join } from './components/Join'
import { Game } from './components/Game'
import { WaitingRoom } from './components/WaitingRoom'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OpeningScreen />} />
        <Route path="/host" element={<Host />} />
        <Route path="/join" element={<Join />} />
        <Route path="/waiting-room/:roomid/:status" element={<WaitingRoom />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
