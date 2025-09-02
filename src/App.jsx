import { useState } from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import Trusted from "./Components/Trusted";

function App() {

  const[theme,setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light');

  
  return (
    <>
    <div className="dark:bg-black relative ">
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Trusted/>
    </div>
    </>
  )
}

export default App
