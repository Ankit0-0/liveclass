import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [roomCode, setRoomCode] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => { 
    e.preventDefault()
    navigate(`room/${roomCode}`)
  }
  return (
    <div className="home-page">
      <form onSubmit={handleSubmit} action="">
        <div>
          <label>Enter Room code</label>
          <input value={roomCode} onChange={e => setRoomCode(e.target.value)} type="text" required placeholder="Enter room code" />
        </div>
        <button type="submit" >Enter room</button>
      </form>
    </div>
  );
};

export default HomePage;