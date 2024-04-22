import {Link} from "react-router-dom"
function Footer(){
    return(
        <footer>
        <div className="container mx-auto">

           <div>
           <h1 className="text-2xl text-[#0D47A1] text-center">Innovative Designs,Lasting Impressions</h1>
           </div>
           <div className="flex justify-between my-5 leading-5">
           <div >
           <Link to="/"> <img src="src/assets/images/logo.png"width={200}  /></Link>
           <p className="w-48">As Eternity Designers we are dedicated in bringing your work to action by creating spaces that are functional and stylish .</p>
           </div>
           <div>
          <h2 className="font-bold text-[#0D47A1]">Quick Links</h2>
          <ul>
            <li>Home </li>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
           <div>
          <h2 className="font-bold text-[#0D47A1]">Our Services</h2>
          <ul>
            <li>Home Interiors </li>
            <li>Office Interiors</li>
            <li>Outdoor Living Spaces</li>
            <li>Commercial Spaces</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#0D47A1]">Contact Us</h2>
          <p>+254756497676</p>
          <p>design@eternityinteriors.co.ke</p>
         
        </div>
        </div>
        </div>
        </footer>
    )
}
export default Footer