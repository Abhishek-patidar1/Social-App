
import "./register.css";
import {Link} from 'react-router-dom'

function Register() {
  return (

    <div className="login">
      <div className="loginWrapper">
        <Link to="/">
        <img className="back" src="/assets/leftarrow.png" alt="" />
        </Link>
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and world you on Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />
            <input type="password" placeholder="Password" className="loginInput" />
            <input type="password" placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
           <Link to="/login">
            <button className="loginRegisterButton">
             Log into Account
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
