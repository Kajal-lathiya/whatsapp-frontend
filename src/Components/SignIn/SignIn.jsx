import React from "react";
import './SignIn.css'
const LoginPage = () => {
    return (
      <>
        <div className="login">
          <div className="login__header">
            <img src="" alt="whatsapp logo" className="login__header__logo" />
            <div className="login__header_title">Whatsapp Web</div>
          </div>
  
          <div className="login__content">
            <div className="login__content__row">
              <div className="login__content__row__description">
                <h1>To use WhatsApp on your computer:</h1>
                <ol>
                  <li>
                    We need your mobile number so as we can create your account .
                  </li>
                  <li>
                    Click verify to receive sms verification and proceed to login
                  </li>
                  <li>Chat with other registered users </li>
                </ol>
              </div>
              <div>
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default LoginPage;