import assets from "../assets/assets"
import { company_logos } from "../assets/assets"

const Trusted = ()=>{
    return (
        <div>
            <h1 className="text-center dark:text-white">
                Trusted by Leading Companies
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-10 m-4">
                {company_logos.map((items , index) =>(
                    <img key={index} src={items} alt="" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"/>
                ))} 
            </div>
        </div>
    )
}

export default Trusted