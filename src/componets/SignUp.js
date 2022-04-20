import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
};
