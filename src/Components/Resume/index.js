import React from "react";
import { Content, Experience, Wrapper } from "./Resume.styles";

//components
import Reference from "../Reference";

const entries = [
    {
        'experience': 'Work Experience',
        'previousExperience': [{
            'title': 'GTOTrainer',
            'link' : 'https://www.gtotrainer.com',
            'role':'Full Stack Developer',
            'time': 'August 2021 - Current'
        }]
    },

    {
        'experience': 'Education',
        'previousExperience': [{
            'title': 'Rafael Urdaneta University',
            'link' : 'http://www.uru.edu',
            'role': 'MS - Computer Engineering',
            'time': '2018 - 2022'
        }]
    }
]

const Resume = () =>(
   <Wrapper>
       <Content>
           <h1 class='underlined'>Resume</h1>

            <Experience>

                {entries.map((entry) => (
                    <div className='entry'>
                       <h2>{entry.experience}</h2>

                        {entry.previousExperience.map((experience)=>(
                            <Reference title={experience.title} link={experience.link} role={experience.role} time={experience.time} />
                        ))}

                    </div>
                ))}

            </Experience>

       </Content>
   </Wrapper>
);

export default Resume;