import React from "react";
// styles
import { Wrapper, Content, HeroImage } from "./Hero.styles";
// images
import heroImage from "../../images/BFAFDAF7-36D7-46D3-BE31-C51E6B20A24F-removebg-preview.png"
// components
import Button from "../Button";

const Hero = () => (
    <Wrapper>
        <Content>
            <HeroImage src={heroImage}/>
            <h2>Hi, I'm Juan👋</h2>
            <h1>Computer Engineer and <br/>Software <span className='underlined'> Developer</span></h1>
            <p> 
                Proactive <strong>problem-solver</strong> with excellent <strong>communication skills</strong>, <br/> able to work effectively in both team and
                independent settings.
            </p>
            <Button text='CONNECT WITH ME' link='/contact'/>
        </Content>
    </Wrapper>
);

export default Hero;