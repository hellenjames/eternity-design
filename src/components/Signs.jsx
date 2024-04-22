import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
function Signs() {
  const [showPassword, setShowPassword] = useState(true);
  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="bg-[#0D47A1] h-[100vh] flex justify-center items-center">
      <div className="flex bg-white box-boder shadow-lg p-[50px] rounded-xl">
        <div className="bg-white w-[100%] h-[100]">
          <img src="src/assets/images/signup.jpg" />
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            />
          </div>
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Email"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            />
          </div>
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Phone Number"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            />
          </div>
          <div className="border-2  rounded-lg  shadow-lg flex">
            <input
              type={showPassword?"password" :"text"}
              placeholder="password"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            />
            <div
              className="flex  items-center text-[20px] cursor-pointer pr-4"
              onClick={changeThePassword}
            >
              {" "}
              {showPassword ? <LuEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Confirm Passsword"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            />
          </div>
          <div className="flex justify-center ">
            <a
              href="#"
              className="bg-[#0D47A1] px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold"
            >
              Create Account
            </a>
          </div>
          <div className="flex justify-center text-[25px]">
            Already Have An Account{" "}
            <a href="/login" className="text-[#0D47A1] ">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signs;
