import Design from "./Design"
import home from "../assets/images/home.avif"
import commercial from"../assets/images/commercial.avif"
import office from"../assets/images/office.webp"
import living from"../assets/images/living.webp"
function Designs(){
    return(
        <div>
            <h2  className="text-2xl text-[#0D47A1] text-center my-5 font-bold">Designs For Every Environment</h2>

        <div className="flex container mx-auto"> 
            
            <Design img={home}name="Home Interiors
"/>
            <Design img={commercial }name="Commercial Spaces
"/>
            <Design img={office }name="Office Interiors
"/>
            <Design img={living }name="Outdoor Living Spaces
"/>
        </div>
        </div>
    )
}
export default Designs