import React, { useState, useEffect } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import "./WaitingRoom.scss";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

export const WaitingRoom = () => {
  const params = useParams();
  const roomid = params.roomid;
  const status = params.status;
  const [userFullName, setUserFullName] = useState("");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [jitsiAPI, setJitsiAPI] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [socket, setSocket] = useState(null);
  const [playerList, setPlayerList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const leaveGame = () => {
    socket.close()
    navigate(`/`)
  }

  const startGame = () => {
    socket.close()
    navigate(`/game`)
  }

  const jitsiConfig = {
    startAudioOnly: true,
    domain: "meet.anupamkris.tech",
  };

  const apiReady = (api) => {
    console.log("AOUIKALDSJHF :KAD", api);
    setJitsiAPI(api);
  };

  const muteAudio = () => {
    jitsiAPI.executeCommand("toggleAudio");
    jitsiAPI.isAudioMuted().then((muted) => {
      setIsMuted(muted);
    });
  };

  const connectToRoomVoice = () => {
    setVoiceEnabled(true);
  };

  const startRoomLobby = () => {
    setShowModal(false);
    let sock = io("http://localhost:5000/");
    setSocket(sock);

    if (status === "host") {
      sock.emit("join-room", { roomid, player: userFullName, host: true });
    } else {
      sock.emit("join-room", { roomid, player: userFullName, host: false });
    }

    sock.on("joined-room", (data) => {
      console.log("Room Joined : ", data);
      if (data.player === userFullName) {
        setVoiceEnabled(true);
      } 
      setPlayerList(data.playerList);
    });

    sock.on("left-room", (data) => {
      console.log("Room Left : ", data);
      alert(`${data.player} left the room`);
      setPlayerList(data.playerList);
    });
    
    sock.on("new-host", (data) => {
      if (data.player === userFullName) {
        alert("You are the new host");
      } else {
        alert(`${data.player} is the new host`);
      }
    });

    sock.on("room-not-found", (data) => {
      alert("Room not found");
      navigate(`/join`);
    });
  };

  return (
    <div className="waiting-room-container">
      <div className="logo">
        <span>Secret Modi</span>
      </div>
      {showModal && (
        <>
          <div className="modal">
            <input
              type="text"
              value={userFullName}
              placeholder="Enter Your Nickname.."
              onChange={(e) => {
                setUserFullName(e.target.value);
              }}
            />
            <button onClick={startRoomLobby}>{status == "host" ? "Host" : "Join"}</button>
          </div>
        </>
      )}
      {!showModal && (
        <>
          {voiceEnabled && (
            <JitsiMeeting
              className="jitsi-container"
              roomName={roomid}
              displayName={userFullName}
              domain="meet.anupamkris.tech"
              onApiReady={(api) => apiReady(api)}
            />
          )}

          <div className="roomcode">
            <span>Room code - {roomid}</span>
          </div>

          <div className="userpool-container">
            <div className="userpool-cards">
              {playerList.map((player) => {
                return (
                  <div className="userpool-card">
                    <span>{player}</span>
                  </div>
                );
              })}
              
            </div>
          </div>
          <div className="waitingroom-options">
            <div className="waitingroom-option" onClick={muteAudio}>
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </div>
          
            <div className="waitingroom-option">
              <span>Start Game</span>
            </div>
            <div className="waitingroom-option" onClick = {leaveGame}>
              <span>Leave Game</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
