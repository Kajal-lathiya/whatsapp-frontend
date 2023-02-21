import React from "react";
import {  SentimentSatisfied } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { KeyboardVoice } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import "./Chats.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <AccountCircle />

          <h3>Sender Mobile</h3>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <Search/>
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__message chat__messageIn">
          <div className="chat__messageCotainer">
            <span className="chat__messageContent">
              Hello , how are you doing?
            </span>
            <span class="chat__messageTime">18:22</span>
          </div>
        </div>

        <div className="chat__message chat__messageOut ">
          <div className="chat__messageCotainer">
            <span className="chat__messageContent">I am doing great :-)</span>
            <span class="chat__messageTime">18:22</span>
          </div>
        </div>
      </div>

      <div className="chat_footer">
        <SentimentSatisfied/>
        <AttachFile />
        <input type="text" placeholder="Type a message" />

        <KeyboardVoice />
      </div>
    </div>
  );
};

export default Chat;