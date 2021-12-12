import React from "react";
// styles
import { Wrapper, Content, HeroImage } from "./Hero.styles";
// images
import heroImage from "../images/BFAFDAF7-36D7-46D3-BE31-C51E6B20A24F-removebg-preview.png"


const Hero = () => (
    <Wrapper>
        <Content>
            <HeroImage src={heroImage}/>
            <h2>Hi, I'm Juan👋</h2>
            <h1>Computer Engineer and <br/>Software <span className='underlined'> Developer</span></h1>
            <p> <strong> Lorem ipsum dolor</strong> sit amet, <strong>consectetur adipiscing </strong>elit,<br /> sed do eiusmod tempor incididunt ut labore 
                et <br />dolore magna aliqua.</p>
        </Content>
    </Wrapper>
);

export default Hero;