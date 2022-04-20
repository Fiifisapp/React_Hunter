import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };
};
