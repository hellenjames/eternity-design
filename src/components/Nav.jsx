import {Link} from "react-router-dom"
function Nav(){
    return(
    <nav>
        <div className="position-fixed right-0 left-0 top-0 container mx-auto flex justify-between items-center ">
        <Link to="/"><img src="src/assets/images/logo.png" width={200} /></Link>
            <ul className="right flex gap-9 items-center  ">

<Link to="/"> <li className="hidden md:block">Home</li></Link>
<Link to="/log"><li className="hidden md:block">Log In</li></Link>
<Link to="/sign"><li className="hidden md:block">Sign up</li></Link>
            </ul>
        </div>
        </nav>
    )
}
export default Nav