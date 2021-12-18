import React from "react";
import { Content, Experience, Wrapper } from "./Resume.styles";

//components
import Reference from "../Reference";

const Resume = () =>(
   <Wrapper>
       <Content>
           <h1 class='underlined'>Resume</h1>

            <Experience>

                <div>
                    <h2>Work Experience</h2>
                    <Reference title='GTOTrainer' link='https://www.gtotrainer.com' role='Full-stack developer' time='August 2021 - Current'/>
                </div>

            </Experience>

       </Content>
   </Wrapper>
);

export default Resume;