import {Link} from "react-router-dom"
function Footer(){
    return(
        <footer>
        <div >
           <Link to="/"> <img src="src/assets/images/logo.png"width={200}  /></Link>
           <h1 className="text-2xl text-[#0D47A1g]">Designers Opportunity</h1>
        </div>
        </footer>
    )
}
export default Footer