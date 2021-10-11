import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';
import Logo from '../../images/logo.svg';


const Footer = () => {
    
    return (
        <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>What We Do</FooterLinkTitle>
                            <FooterLink to="/signin">Kitchen Plumbing</FooterLink>
                            <FooterLink to="/signin">Bathroom Plumbing</FooterLink>
                            <FooterLink to="/signin">Central Heating Cleaning</FooterLink>
                            <FooterLink to="/signin">Central Heating Services</FooterLink>
                            <FooterLink to="/signin">Under Floor Heating</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>Additional Services</FooterLinkTitle>
                            <FooterLink to="/signin">Water Treatment and cleaning</FooterLink>
                            <FooterLink to="/signin">Gas Engineers' Services</FooterLink>
                            <FooterLink to="/signin">Gas Installers' Services</FooterLink>
                            <FooterLink to="/signin">Plumbers Services</FooterLink>
                            <FooterLink to="/signin">Appliances</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>More Services</FooterLinkTitle>
                            <FooterLink to="/signin">Loft Water Tanks</FooterLink>
                            <FooterLink to="/signin">Emergency Gas call outs</FooterLink>
                            <FooterLink to="/signin">Landlord Gas Safety Inspections</FooterLink>
                            <FooterLink to="/signin">Central Heating Installations</FooterLink>
                            <FooterLink to="/signin">Gas Cookers</FooterLink>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                       </FooterLinkItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/home'>
                           <img src={Logo} alt='' width="120" height="80"/>
                       </SocialLogo>
                       <WebsiteRights>Made by James Iesi © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                       <SocialIcons>
                           <socialIconLink href="/" target="_blank" aria-label="Facebook">
                               <FaFacebook />
                            </socialIconLink>
                            <socialIconLink href="/" target="_blank" aria-label="Instagram">
                               <FaInstagram />
                            </socialIconLink>
                            <socialIconLink href="/" target="_blank" aria-label="Youtube">
                               <FaYoutube />
                            </socialIconLink>
                            <socialIconLink href="/" target="_blank" aria-label="Twitter">
                               <FaTwitter />
                            </socialIconLink>
                            <socialIconLink href="//www.linkedin.com/in/mario-iesi-547702100/" target="_blank" aria-label="Linkedin">
                               <FaLinkedin />
                            </socialIconLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
           </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
