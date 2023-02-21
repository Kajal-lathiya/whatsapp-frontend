import React, { useState } from 'react'
import Chat from '../chats/Chats';
import NoChatSelected from '../NoChatSelected/NoChatSelected';
import Sidebar from '../Sidebar/SideBar';

const Home = () => {
  const [canShowChat, setCanShowChat] = useState(false);
  return (
    <div style={{ display: "flex" }}>
    <Sidebar setCanShowChat={setCanShowChat} />
    {canShowChat ? <Chat /> : <NoChatSelected />}
  </div>
  )
}

export default Home