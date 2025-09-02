import { useEffect } from "react"
import assets from "../assets/assets"

const Toggle = ({theme , setTheme}) =>{

    useEffect(()=>{
        const prefersMedia = window.matchMedia('(prefer-color-scheme: dark)').matches;
        setTheme(theme|| (prefersMedia ? 'dark':'true'))
    },[])

    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);

    },[theme])

    return(
        <>
            <button>
                {theme === 'dark'? (
                    <img onClick={()=>setTheme('light')} className="size-8.5 p-1.5 border-gray-500 rounded-full" src={assets.sun_icon} alt="" />
                ):(
                    <img onClick={()=>setTheme('dark')}  className="size-8.5 p-1.5 border-gray-500 rounded-full" src={assets.moon_icon} alt="" />
                )}
            </button>
        </>
    )
}
export default Toggle