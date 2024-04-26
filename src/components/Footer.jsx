import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="shadow-[0_0_8px_lightgray]">
      <div className="py-1">
      <div className="container mx-auto">
        
        <div className="flex justify-between my-5 leading-[2.5]">
          <div>
            <Link to="/">
              <img src="src/assets/images/logo.png" width={200} />
            </Link>
            <p className="w-48">
              As Eternity Designers we are dedicated.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-[#0D47A1]">Quick Links</h2>
            <ul cl>
              <Link to="/">
                <li>Home </li>
              </Link>
              <Link to="/login">
                <li>Log In</li>
              </Link>
              <Link to="/signup">
                <li>Sign Up</li>
              </Link>
              <Link to="/aboutus">
                <li>About Us</li>
              </Link>
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
      </div>
    </footer>
  );
}
export default Footer;
