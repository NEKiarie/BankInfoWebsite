import React, { useState} from "react";
import Video from "../../videos/production.mp4";
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  Herobg,
  Videobg,
  HeroContent,
  HerobtnWrapper,
  HeroP,
  HeroH1,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {

  const [ hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }
  


  return (
    <HeroContainer id="home">
      <Herobg>
        <Videobg autoPlay loop muted src={Video} type="video/mp4" />
      </Herobg>
      <HeroContent>
        <HeroH1>Online Banking Made Easy.</HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $300 in credit towards
          your next payment.
        </HeroP>
        <HerobtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HerobtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
