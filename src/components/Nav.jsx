import { useState, useContext, useEffect } from "react";
import { EternityContext } from "../context/state";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const { currentUser, setCurrentUser } = useContext(EternityContext);


<Link to="/login "><li className="hidden md:block">Log In</li></Link>
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
  }, []);


  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("user");
    navigate("/")
    window.location.reload();
  }

  return (
    <nav className="fixed right-0 left-0 top-0 bg-white h-[10vh] border border-y-[#0D47A1] flex">
      {console.log(currentUser)}
      {currentUser && console.log(currentUser.userType)}
      <div className=" container mx-auto flex justify-between items-center ">
        <Link to="/">
          <img src="src/assets/images/logo.png" width={200} />
        </Link>
        <ul className="right flex gap-9 items-center  ">
          <Link to="/">
            <li className="hidden md:block">Home</li>
          </Link>
          {currentUser ? (
            <button
              className="border border-[#0D47A1] rounded-full py-4 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none hover:border-white"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          ) : (
            <div className="flex justify-between gap-9">
              <Link to="/login">
                <li className="hidden md:block">Log In</li>
              </Link>

              <Link to="/signup">
                <li className="hidden md:block">Sign up</li>
              </Link>
            </div>
          )}
          {currentUser && currentUser.userType === "designer" && (
            <button
              className="border border-[#0D47A1] rounded-full py-4 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none  hover:border-white"
              onClick={() => <Aboutus />}
            >
              Update Profile
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
