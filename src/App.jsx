import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <div className="">
        <h1 className="text-3xl text-pink">Welcome to GTA GSAP</h1>
      </div>
    </main>
  )
}

export default App