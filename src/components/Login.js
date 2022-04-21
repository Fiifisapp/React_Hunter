import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    navigate("/forgot");
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Login In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
      </form>
    </div>
  );
};
export default Login;
