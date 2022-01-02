import React from "react";
// styles
import { Wrapper, Content, Cards } from "./Features.styles";
// components
import Card from '../Card'

const myServices = [
    {
        'emoji' : '💾',
        'title' : 'API Development',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
        'emoji' : '💵',
        'title' : 'Stripe integration for your commerce',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
        'emoji' : '🖥',
        'title' : 'PSD/Figma to Full-Stack Application',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

const Features = () =>(
<Wrapper>
    <Content>
        <h1 className='underlined'>Services</h1>
        <Cards>
            {myServices.map((feature) => (
                <Card emoji={feature.emoji} title={feature.title} content={feature.content} />
            ))}
        </Cards>
    </Content>
</Wrapper>
)

export default Features;