import {Link} from "react-router-dom"
function Nav(){
    return(
    <nav className="fixed right-0 left-0 top-0 bg-white h-[10vh] border border-y-[#0D47A1] flex">
        <div className=" container mx-auto flex justify-between items-center ">
        <Link to="/"><img src="src/assets/images/logo.png" width={200} /></Link>
            <ul className="right flex gap-9 items-center  ">

<Link to="/"> <li className="hidden md:block">Home</li></Link>

<Link to="/login "><li className="hidden md:block">Log In</li></Link>

<Link to="/signup"><li className="hidden md:block">Sign up</li></Link>
            </ul>
        </div>
        </nav>
    )
}
export default Nav