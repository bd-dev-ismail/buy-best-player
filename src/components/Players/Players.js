import React, { useEffect, useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';
const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data => setPlayers(data))
    },[])
    return (
      <div className="control-player-cart py-8 container mx-auto">
        <div className="player-container gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <SinglePlayer player={player} key={player.id}></SinglePlayer>
          ))}
        </div>
        <div>
          <h3>I am cart</h3>
        </div>
      </div>
    );
};

export default Players;