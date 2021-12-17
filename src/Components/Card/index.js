import React from "react";

import { Wrapper, Content } from "./Card.styles";

const Card =({emoji, title, content}) =>(
    <Wrapper>
        <Content>
            <h1>{emoji}</h1>
            <h2>{title}</h2>
            <p>{content}</p>
        </Content>
    </Wrapper>
)

export default Card;