import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import mobileLogo from '../../assets/landing_page/phone/logo.svg'
import mobileCaptured from '../../assets/landing_page/phone/captured_man.png';
import mobileAnalysis from '../../assets/landing_page/phone/analysis.svg';
import mobileDetails from '../../assets/landing_page/phone/details.svg';
import mobileArrow from '../../assets/landing_page/phone/bi_arrow.png';
import tabletAnalysis from '../../assets/landing_page/tablet/analysis.svg';
import desktopCaptured from '../../assets/landing_page/desktop/captured_man.png';
import desktopDetails from '../../assets/landing_page/desktop/details.svg';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  }
  return (
    <div>
      <Logo className="logo">
            
      </Logo>
      <Hero className="hero-section">
        <Container className="container">
          <Captured className="captured-man"></Captured>
          <Analysis className="analysis"></Analysis>
          <Details className="details"></Details>
        </Container>
    
        <Text className="text">
          <p>
            Please login to <span>Hunt</span> the details of <span>domain</span> names, authors of <span>articles</span>, 
            official <span>emails</span>, etc. 
          </p>
        </Text>
    
        <Button className="button" onclick={handleClick}>
          login
          <img src={mobileArrow} alt="pointer" />
        </Button>
      </Hero>
    </div>
  )
}

export default LandingPage;