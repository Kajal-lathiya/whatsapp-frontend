import React from "react";

import { AccountCircle } from "@mui/icons-material";


import "./Contact.css";

const Contact = () => {
    return (
      <div className="contact" >
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