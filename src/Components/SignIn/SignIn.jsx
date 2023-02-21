import React from "react";
import './SignIn.css'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const LoginPage = () => {
  // const [isLoading, setIsLoading] = useState(true)
    return (
      <>
        <div className="login">
          <div className="login__header">
            <img src={logo} alt="whatsapp logo" className="login__header__logo" />
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
              <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
              
            </footer>
        </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default LoginPage;