import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Outro = () => {
    useGSAP(()=>{
        gsap.set(".final-message", {marginTop: "-100vh", opacity: 0})

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".final-message",
                start: "top 30%",
                end: "top 10%",
                scrub: true
            }
        })
        tl.to(".final-content", {opacity:0, duration: 1, ease: "power1.inOut"})
        tl.to(".final-message", {opacity:1, duration: 1, ease: "power1.inOut"}, "<")
    })
  return (
    <section className="final-message">
        <div className='h-full col-center gap-10'>
            <img src="/images/logo.webp" alt="logo" className='md:w-72 w-52' />
            <div>
                <h3 className="gradient-title">
                    Coming <br /> May 26th <br /> 2026
                </h3>
            </div>
            <div className="flex-center gap-10">
                <img src="/images/ps-logo.svg" alt="ps logo" className='md:w-22 w-10' />
                <img src="/images/x-logo.svg" alt="xbox logo" className='md:w-42 w-30' />
            </div>
        </div>
    </section>
  )
}

export default Outro