import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser } = useUserContext();
  const history = useHistory();
};
