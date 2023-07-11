import { BrowserRouter } from "react-router-dom"
import {About, Roadmap, Hero, Navbar, Piechart, Footer} from "./components"


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Piechart />
        <Roadmap />
        <div className='relative z-0'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App