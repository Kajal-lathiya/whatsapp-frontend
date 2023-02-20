import React from "react";

import { AccountCircle } from "@mui/icons-material";
import "./Contact.css";

const Contact = ({ setCanShowChat }) => {
    return (
      <div className="contact" onClick={() => setCanShowChat(true) }>
        <div className="contact__avatar">
          <AccountCircle />
        </div>
        <div className="contact__text">
          <h2>User Mobile</h2>
          <p>Last message here</p>
        </div>
      </div>
    );
  };
  
  export default Contact;