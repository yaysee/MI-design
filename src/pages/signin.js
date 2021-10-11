import React, {useState} from 'react';
import Navbar from '../NavbarB';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import {FaEnvelope, FaFacebookMessenger, FaGlobe, FaPhone, FaUser} from 'react-icons/fa';
import {FormWrapper, TopLine, MainWrapper, MainForm, Form1, Email, Phone, FirstName, SecondName, Grid_A, Grid_B, Message, FirstNameInput, SecondNameInput, EmailInput, PhoneInput, MessageInput, ButtonArea, Submit, SendingMessage} from './signinElements';
import Logo from '../images/logo.svg';
import emailjs from 'emailjs-com';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_udp0sx8', 'template_zswziu5', e.target, 'user_nofGM2OiSSxuYB2tVRGGf'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>

            <MainWrapper >
                <FormWrapper>
                <img src={Logo} alt='' width="120" height="80" align='right'/>
                <TopLine>Send Us a Message</TopLine>
                    <MainForm action='#' >
                        <Form1 className='field' >
                          <Grid_A>  
                            <FirstName className='field'>
                                <FirstNameInput type='text' name= 'first_name' placeholder='Enter your first name'></FirstNameInput>
                            </FirstName>
                            <SecondName className='field'>
                                <SecondNameInput type='text' name= 'second_name' placeholder='Enter your second name'></SecondNameInput>
                            </SecondName>
                           </Grid_A>
                           <Grid_B> 
                            <Email className='field'>
                                <EmailInput type='email' name='user_email' placeholder='Enter your email'></EmailInput>
                            </Email>
                            <Phone className='field'>
                                <PhoneInput type='number' name='phone_number' placeholder='Enter your phone number'></PhoneInput>
                            </Phone>
                            </Grid_B> 
                        </Form1>
                        <Message className='field'>
                            <MessageInput type='text' name='message' placeholder='Please write the issue you are having'></MessageInput>
                        </Message>

                        <ButtonArea className='field'>
                            <Submit type='submit' value='Send'>Send Message</Submit>
                            <SendingMessage>Sending your message...</SendingMessage>
                        </ButtonArea>

                    </MainForm>
                
                </FormWrapper>
            </MainWrapper>


            <Footer />
        </>
    );
};

export default Mailer;
