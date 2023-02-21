import React from 'react'

import './ChatRoom.css'

const ChatRoom = () => {
  return (
    <div className="chatroom">
    <div className="chatroom__header">
      <div className="chatroom__headerinfoleft">
        <h3>User</h3>
        <p>
       last seen /online / Deleted account
        </p>
      </div>
      <div className="chatroom__header__inforight">
      
      </div>
    </div>
    <div className="chatroom__body">
    
        <p className='chatroom__message'>
          <span className="chatroom__username">Message Name </span>
         MesageMesage
          <span className="chatroom__messagetimestamp ">
             Message Time 
          </span>
        </p>
  
    </div>
    <div className="chatroom__footer">
      <form>
        <input
          value="Message"
       
          placeholder="Type your message here"
        />
        <button  type="submit">Send
        </button>
      </form>
    </div>
  </div>

  )
}

export default ChatRoom