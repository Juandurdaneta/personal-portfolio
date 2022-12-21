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
        'items': [
        {
            'title': 'Responsive Web Design',
            'link' : 'https://www.freecodecamp.org/certification/juandurdaneta/responsive-web-design',
            'role': '',
            'time': 'Issued May 12, 2021'
        },
        {
            'title': 'Scrum Foundation Professional Certificate ',
            'link' : 'https://www.credly.com/badges/f3cc484d-4dc3-4d2a-9380-65530488be2d',
            'role': '',
            'time': 'Issued July 11, 2021'
        },
        {
            'title': 'Web Development Bootcamp',
            'link' : 'https://www.udemy.com/certificate/UC-ac914924-609f-43e3-a45e-858e273a0bf1/',
            'role': '',
            'time': 'Issued Sept. 24, 2021'
        },
        {
            'title': 'JavaScript Algorithms and Data Structures',
            'link' : 'https://www.freecodecamp.org/certification/juandurdaneta/javascript-algorithms-and-data-structures',
            'role': '',
            'time': 'Issued May 13, 2022'
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
                            <div className="references-list">
                                {entry.items.map((item, index)=>(
                                    <Reference key={index} title={item.title} link={item.link} role={item.role} time={item.time} />
                                ))}
                            </div>
                    </div>
                ))}

            </Experience>

       </Content>

   </Wrapper>
);

export default Resume;