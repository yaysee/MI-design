import React, {useState} from 'react';
import Navbar from '../NavbarB';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import {FaEnvelope, FaFacebookMessenger, FaGlobe, FaPhone, FaUser} from 'react-icons/fa';
import Logo from '../images/logo.svg';
import emailjs from 'emailjs-com';

const Gallery = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <MainWrapper>











            </MainWrapper>




            <Footer />

        </>
    );

};

export default Gallery