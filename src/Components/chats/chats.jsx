import React, {  useState } from "react";
import "./chats.css";

function Chats() {

 

  return (
    <div>
  
      <div className="chats">
        <img src={'https://avatars.dicebear.com/api/human/.svg'} />
        <div className="chats__info">
          <h3>name</h3>
          <p>Messages</p>
        </div>
      </div>
  
  
    <div  className="chats">
      <h2>Add New Chat</h2>
    </div>
    </div>
  );
}

export default Chats;
