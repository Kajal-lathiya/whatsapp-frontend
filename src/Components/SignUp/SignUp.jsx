import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import Logo from '../assets/logo.png'
export default function SignUpPage() {

    return (
       < div className="login">
        <div className="login__header">
          <img src={Logo} alt="whatsapp logo" className="login__header__logo" />
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
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/login">Login</Link></p>
            </footer>
        </div>
            </div>
          </div>
        </div>
      </div>
    )

}