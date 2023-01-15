import React from "react";
import { FormInput, FormTextArea, FormWrapper, SubmitFormButton, Wrapper } from "./Contact.styles";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GridContainer } from "./Projects.styles";

const Contact = () => (
    <Wrapper>
        <h1>Love to hear from you,<br/>Get in touch👋</h1>
        <FormWrapper>
            <GridContainer>
                <Grid2 container spacing={3}>
                    <Grid2 md={6} xs={12}>
                        <label for="name">Your name</label>
                        <FormInput id="name" placeholder="Enter your name"/>
                    </Grid2>
                    <Grid2 md={6} xs={12}>
                        <label for="email">Your email</label>
                        <FormInput id="email" placeholder="Enter your email"/>
                    </Grid2>
                    <Grid2 xs={12}>
                        <label for="message" >Message</label>
                        <FormTextArea id="message" placeholder="Let me know about your project"/>
                    </Grid2>
                </Grid2>
            </GridContainer>
        </FormWrapper>

        <SubmitFormButton>Send</SubmitFormButton>
    </Wrapper>
);

export default Contact;

