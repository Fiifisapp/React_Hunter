import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";


const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <>
      <div className="banner">
        <h2> Register </h2>
      </div>

      <div className="signup-image"></div>
      <div className="signup-form">
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} className="signup-input"/>
          <input placeholder="Name" type="name" ref={nameRef} className="signup-input"/>
          <input placeholder="Password" type="password" ref={psdRef} className="signup-input"/>
          <button type="submit" className="signup-button">Register</button>
        </form>
      </div>
    </>
  );
};
export default Signup;
