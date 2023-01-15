import React, {useRef, useState} from "react";
import { FormInput, FormTextArea, FormWrapper, SubmitFormButton, Wrapper } from "./Contact.styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GridContainer } from "./Projects.styles";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();


        setName('');setMail('');setMessage('');

        emailjs.sendForm('service_96b1el9', 'template_bf4p3bi', form.current, 'FtqZds5uoTqUAXjvk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    

    return(
    <Wrapper>
        <h1>Love to hear from you,<br/>Get in touch👋</h1>
        <FormWrapper ref={form}>
            <GridContainer>
                <Grid2 container spacing={3}>
                    <Grid2 md={6} xs={12}>
                        <label htmlFor="name">Your name</label>
                        <FormInput id="name" name="from_name" placeholder="Enter your name" value={name} onChange={(e)=>(setName(e.target.value))}/>
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                        <label htmlFor="email">Your email</label>
                        <FormInput id="email" name="reply_to" placeholder="Enter your email" value={mail} onChange={(e)=>(setMail(e.target.value))}/>
                    </Grid2>
                    <Grid2 xs={12}>
                        <label htmlFor="message" >Message</label>
                        <FormTextArea id="message" name="message" placeholder="Let me know about your project" value={message} onChange={(e)=>(setMessage(e.target.value))}/>
                    </Grid2>
                </Grid2>
            </GridContainer>

            <SubmitFormButton type='submit' onClick={sendMail}>Send</SubmitFormButton>
        </FormWrapper>

    </Wrapper>
)
};

export default Contact;

