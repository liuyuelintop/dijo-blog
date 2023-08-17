import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useHistory} from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup_status, setSignUpStatus] = useState('');
  const history = useHistory();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Optionally, you can also set the user's display name here
        // userCredential.user.displayName = name;
        console.log(userCredential);
        setSignUpStatus("Sign up successfully");
        history.push("/");
      }).catch((error) => {
        console.log(error);
        setSignUpStatus("Failed to sign up, please try again...");
      })
  }

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Sign Up</button>
        <p>{signup_status}</p>
      </form>
    </div>
  );
};

export default SignUp;
