import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CommingSoon from './CommingSoon'
import { useMaskSettings } from '../../constants'

const Hero = () => {

    const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings()

    useGSAP(() => {
        gsap.set(".mask-wrapper", {
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize,

        })

        gsap.set(".mask-logo", {marginTop: "-100vh", opacity: 0})
        gsap.set(".entrance-message", {marginTop: "0vh"})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-section",
                markers: true,
                start: "top top",
                scrub: 2.5,
                end: "+=200%",
                pin: true,
            }
        })
        tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
            .to('.scale-out', { scale: 1, ease: 'power1.inOut' }, "<5%")
            .to(".white-fade-overlay", {opacity:1, duration:0.25}, "<95%")
            .to('.mask-wrapper', { maskSize, ease: 'power1.inOut'}, 0.15)
            .to(".mask-wrapper", {opacity: 0})
            .to(".overlay-logo", {opacity: 1, onComplete: ()=> {
                gsap.to(".overlay-logo", {opacity: 0})
            }}, "<")
            .to(".entrance-message", {duration:1, ease: "power1.inOut", maskImage: "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%"}, "<")
            
        
    })
  return (
    <section className='hero-section'>
        <div className='size-full mask-wrapper'>
        <div className="white-fade-overlay"></div>
            <img src='/images/hero-bg.webp' className='scale-out' alt='GTA VI illustrated cover with the two main characters armed with guns and the city on the background' />
            <img src='/images/hero-text.webp' className='title-logo fade-out' alt='Hero logo for GTA VI'  />
            <img src="/images/watch-trailer.png" alt="trailer screenshot" className='trailer-logo fade-out' />
            <div className='play-img fade-out'>
                <img src="/images/play.png" alt="play button" className='w-7 ml-1' />
            </div>
        </div>
        <div>
            <img src="/images/big-hero-text.svg" alt="logo text" className='size-full object-cover mask-logo' />
        </div>
        <div className="fake-logo-wrapper">
            <img src="/images/big-hero-text.svg" alt="overlay logo" className='overlay-logo'/>
        </div>
        <CommingSoon />
    </section>
  )
}

export default Hero