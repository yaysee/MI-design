import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import Background from '../../videos/background.jpg'
import {animateScroll as scroll} from 'react-scroll'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id='home'>
            <HeroBg>
           {/*} <VideoBg autoPlay loop muted src={Video}type='video/mp4' /> */}
           <VideoBg src={Background}type='background.jpg' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Gas engineering made Easy</HeroH1>
                <HeroP>Click the button below and enter your contact information for a quote</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >
                        Get a Quote {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}


export default HeroSection