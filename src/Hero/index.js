import React from "react";
// styles
import { Wrapper, Content, HeroImage } from "./Hero.styles";
// images
import heroImage from "../images/BFAFDAF7-36D7-46D3-BE31-C51E6B20A24F-removebg-preview.png"


const Hero = () => (
    <Wrapper>
        <Content>
            <HeroImage src={heroImage}/>
            <h1>Hi, I'm Juan👋</h1>
        </Content>
    </Wrapper>
);

export default Hero;