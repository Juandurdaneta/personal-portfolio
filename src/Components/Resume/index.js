import React from "react";
import { Content, Experience, Wrapper } from "./Resume.styles";

//components
import Reference from "../Reference";

const entries = [
    {
        'title': 'Work Experience',
        'items': [{
            'title': 'GTOTrainer',
            'link' : 'https://www.gtotrainer.com',
            'role':'Full Stack Developer',
            'time': 'August 2021 - Current'
        }]
    },

    {
        'title': 'Education',
        'items': [{
            'title': 'Rafael Urdaneta University',
            'link' : 'http://www.uru.edu',
            'role': 'MS - Computer Engineering',
            'time': '2018 - 2022'
        }]
    },
    {
        'title': 'Certifications',
        'items': [{
            'title': 'Web Development Bootcamp',
            'link' : 'https://www.udemy.com/certificate/UC-ac914924-609f-43e3-a45e-858e273a0bf1/',
            'role': '',
            'time': '2021'
        },
        {
            'title': 'Python Pro Bootcamp',
            'link' : 'http://www.uru.edu',
            'role': '',
            'time': '2022'
        },
    ]
    }
]

const Resume = () =>(
   <Wrapper>
       <Content>
           <h1 className='underlined'>Resume</h1>

            <Experience>

                {entries.map((entry, index) => (
                    <div key={index} className='entry'>
                       <h2 className="text-blue-600">{entry.title}</h2>

                        {entry.items.map((item, index)=>(
                            <Reference key={index} title={item.title} link={item.link} role={item.role} time={item.time} />
                        ))}

                    </div>
                ))}

            </Experience>

       </Content>

       <h2 className="text-blue-600">test</h2>


   </Wrapper>
);

export default Resume;