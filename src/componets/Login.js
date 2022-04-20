import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
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
    // const email = emailRef.current.value;
    // if (email)
    //   forgotPassword(email).then(() => {
    //     emailRef.current.value = "";
    //   });
  };
};
