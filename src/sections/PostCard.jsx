import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

const PostCard = () => {
    const videoRef = useRef(null)

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".post-card",
                start: "top center",
                end: "bottom 20%",
                scrub: 2,
                markers: true
            }
        })
        videoRef.current.onloadedmetadata = ()=> {
            tl.to(videoRef.current, {currentTime: videoRef.current.duration, duration: 3, ease: "power1.inOut"}, "<")
        }
    })
  return (
    <section className='post-card'>
        <div className='animated-gradient-bg' />
        <div className="post-card-wrapper group hover:rotate-1 hover:scale[1.02" transition duration-700>
            <img src="/images/overlay-2.webp" alt="" />

            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                autoPlay
                
                src="/videos/postcard-vd.mp4"
                className=""
            />
            <button className="group-hover:bg-yellow transition duration-700">
                Explore Vice City
            </button>
        </div>

    </section>
  )
}

export default PostCard