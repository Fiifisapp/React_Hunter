import React , { useRef } from 'react'
import { useUserContext } from '../context/userContext';

const ForgotPassword = () => {

    const emailRef = useRef();
  const { forgotPassword } = useUserContext();

  const forgotPasswordHandler = () => {  
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      })
      .catch((err) => {
          return (<p>{err.message}</p>)
      });
  };
  return (
    <div className="form">
      <h2> Forgot Password </h2>

      <input placeholder="Email" type="email" ref={emailRef} />
        <button type="submit" onClick={forgotPasswordHandler}>Reset</button>
      
    </div>
  )
}