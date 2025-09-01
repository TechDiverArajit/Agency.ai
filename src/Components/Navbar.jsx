import { useState } from "react";
import assets from "../assets/assets";

const Navbar = ({theme , setTheme})=>{

    const[opened , setOpened] = useState(false);
    
    const openClick = ()=>{
        setOpened(false);
    }

    return(
        <>
            <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50
             dark:bg-gray-900/70 ">
                
                    <img src={theme==="dark" ? assets.logo_dark: assets.logo} className="w-32 sm:w-40"alt="" />     

                    <div className={`text-gray-700 dark:text-white ${!opened? `max-sm:w-0 overflow-hidden`: `max-sm:w-60 max-sm:pl-10`} sm:text-sm  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}  >

                        <img onClick={openClick} src={assets.close_icon} alt="" className="w-5 absolute top-4 sm:hidden" />

                        <a href="#" className="sm:hover:border-b">Home</a>
                        <a href="#services" className="sm:hover:border-b">Services</a>
                        <a href="#our-work" className="sm:hover:border-b">Our Work</a>
                        <a href="#testimonials" className="sm:hover:border-b">Testimonials</a>
                           
                    </div> 
                    <div>

                        <img src={theme==='dark'? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={()=>setOpened(true)} className="w-8 sm:hidden"  />

                        <a className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all" href="#contact-us"> Connect <img src={assets.arrow_icon} width={14} alt="" /></a>    
                    </div>       
            </div>
        </>
    )
}
export default Navbar;