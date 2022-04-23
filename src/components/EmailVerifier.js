import React from "react";
import Navigation from "./Navigation";

const EmailVerifier = () => {
  return (
    <div>
      <Navigation />
      <input
        type="text"
        className="verifier-input"
        placeholder="Enter an email address to verify its validity"
      />
      <button className="verifier-button">verify</button>
    </div>
  );
};

export default EmailVerifier;
