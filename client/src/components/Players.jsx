import React from "react";
import Player from "./Player.jsx";

const Players = ({data}) => (
  <div>
{data.map((ele,i)=>{
  return <Player {...ele} key={i} />
})}    
  </div>
);

export default Players;
