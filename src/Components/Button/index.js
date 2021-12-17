import React from "react";
import { Btn } from "./Button.styles";

const Button = ({text, link}) => (
    <Btn href={link}>{text}</Btn>
)


export default Button;