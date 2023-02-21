import React, { useState } from "react";
import { Menu }from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Chat } from "@mui/icons-material";
import { AccountCircle } from "@mui/icons-material";
import { DonutLarge } from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import  {IconButton} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import "./SideBar.css";
import Contact from "../Contact/Contact";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header_left">
          <IconButton>
            <AccountCircle />
          </IconButton>
          Username Here
        </div>
        <div className="sidebar__header_right">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>New Group</MenuItem>
            <MenuItem onClick={handleClose}>Create a room</MenuItem>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Archived</MenuItem>
            <MenuItem onClick={handleClose}>Starred</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="sidebar__chats">
        <Contact/>
    
      </div>
    </div>
  );
};
export default Sidebar;