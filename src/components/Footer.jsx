import {Link} from "react-router-dom"
function Footer(){
    return(
        <footer>
        <div className="flex">

           <div>
           <h1 className="text-2xl text-[#0D47A1] text-center">Designers Opportunity</h1>
           </div>
           <div>
           <Link to="/"> <img src="src/assets/images/logo.png"width={200}  /></Link>
           <p className="w-58">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos nulla tenetur, ut fugit molestias unde excepturi nobis voluptas, obcaecati laudantium? Non voluptates assumenda dolore eius numquam placeat tempora debitis.</p>
           </div>
           <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul>
            <li>Home </li>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
           <div>
          <h2 className="font-bold">More Info</h2>
          <ul>
            <li>Housing Finshing </li>
            <li>Painting</li>
            <li>Structure</li>
            <li>Modifying</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Contact Us</h2>
         
        </div>
        </div>
        </footer>
    )
}
export default Footer