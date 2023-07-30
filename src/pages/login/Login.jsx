import "./login.css";
import {Link} from "react-router-dom"
function login() {
  return (
    <div className="login">
      <div className="loginWrapper">
      <Link to="/">
        <img className="back" src="/assets/leftarrow.png"  alt="" />
        </Link>
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and world you on Social
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton"> Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton">
              Create a New Account
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
