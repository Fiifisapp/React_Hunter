import React from 'react';
import Navigation from './Navigation';
import { useState } from 'react';
import axios from 'axios';
import "./emailfinder.styles.css";

const EmailFinder = () => {

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [domain, setDomain] = useState();

  const handleFind = () => {
    emailFinder()
  }

  const emailFinder = async () => {
    try {
      const data = await axios.get(`https://api.hunter.io/v2/email-finder?domain=${domain}&first_name=${firstname}&last_name=${lastname}&api_key=ff389661c63ab90742cfe61e1f82343073b8893e`)

      if (data) {
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navigation />
      <form>
        <input type="text" className="email-style" placeholder='first name' onChange={e => setFirstname(e.target.value)} />
    </div>
  )
}

export default EmailFinder