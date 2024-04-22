import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

function LoginsPage() {
  const [showPassword, setShowPassword] = useState(true);
  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="bg-[#0D47A1] h-[100vh] flex justify-center items-center ">
      <div className="bg-white p-[10em] shadow-xl box-border rounded-xl flex flex-col gap-[2em]">
        <div className="border-2  rounded-lg w-full shadow-lg ">
          <input
            type="text"
            placeholder="Full Name"
            className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type={showPassword ? "password" : "text"}
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
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="text-[#0D47A1]">Forgot Password?</p>
        </div>
        <div className="flex justify-center ">
          <a
            href="#"
            className="bg-[#0D47A1] px-[7em] py-5 rounded-[2em] shadow-lg text-white font-bold"
          >
            Log in
          </a>
        </div>
        <div className="flex justify-center  text-[20px] my-2">
          Dont Have An Account Yet?
          <a href="Singup" className="text-[#0D47A1]">
            Sign Up Free
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginsPage;
