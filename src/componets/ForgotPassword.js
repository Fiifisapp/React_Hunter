import React , { useRef } from 'react'
import { useUserContext } from '../context/userContext';

const ForgotPassword = () => {

    const emailRef = useRef();
  const { forgotPassword } = useUserContext();

