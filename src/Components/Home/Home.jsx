import React, { useState } from "react";
import Chat from "../chats/Chats";
// import Contact from "../Contact/Contact";
import NoChatSelected from "../NoChatSelected/NoChatSelected";
import Sidebar from "../Sidebar/SideBar";

const Home = () => {
  const [canShowChat, setCanShowChat] = useState(false);
  return (
    <div style={{ display: "flex" }}>
       {/* <Contact setCanShowChat={setCanShowChat}  /> */}
       <Sidebar setCanShowChat={setCanShowChat} />
      {canShowChat ? <Chat /> : <NoChatSelected />}
    </div>
  );
};

export default Home;
