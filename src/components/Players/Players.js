import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css';
const Players = () => {
    const [players, setPlayers] = useState([]);
    const [order, setOrder] = useState([]);
    
    useEffect(()=>{
        fetch('players.json')
        .then(res=>res.json())
        .then(data => setPlayers(data));
        const neworder = JSON.parse(localStorage.getItem("cart"));
        if(neworder){
          setOrder(neworder);
        }
    },[]);
    return (
      <div className="control-player-cart py-8 container mx-auto">
        <div className="player-container gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {players.map((player) => (
            <SinglePlayer
              player={player}
              key={player.id}
              order={order}
              setOrder={setOrder}
            ></SinglePlayer>
          ))}
        </div>
        <div className=" cart-container bg-info rounded-lg shadow-2xl">
          <h3 className=" sticky top-0 text-center text-2xl font-bold py-2">
            Order Summary
          </h3>
          <div className="sticky top-8">
            {order.map((item) => (
              <Cart item={item} key={item.id}></Cart>
            ))}
            <p className="text-white p-4 text-xl font-bold">
              Total Price : {order.reduce((prev, current) => prev + current.price, 0)}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Players;