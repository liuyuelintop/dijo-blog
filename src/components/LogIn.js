import { useState } from "react";
import {auth} from "../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useHistory} from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login_status, setLogInStatus] = useState('');
  const history = useHistory();

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLogInStatus("Log in successfully");
        history.push("/home");
      }).catch((error) => {
        console.log(error);
        setLogInStatus("Failed to log in, please try again...");
      })

  }
  return (
    <div className="log-in-container">
      <form onSubmit={handleLogIn}>
        <h2>Log In</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
        <p>{login_status}</p>
      </form>
    </div>
  );
};

export default LogIn;
