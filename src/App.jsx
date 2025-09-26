import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App