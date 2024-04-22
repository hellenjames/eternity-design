import {Link} from "react-router-dom"
function Nav(){
    return(
    <nav>
        <div className="container mx-auto flex justify-between items-center ">
        <Link to="/"><img src="src/assets/images/logo.png" width={200} /></Link>
            <ul className="right flex gap-9 items-center  ">

<Link to="/"> <li>Home</li></Link>
<Link to="/log"><li>Log In</li></Link>
<Link to="/sign"><li>Sign up</li></Link>
            </ul>
        </div>
        </nav>
    )
}
export default Nav