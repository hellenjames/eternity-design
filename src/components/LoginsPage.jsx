import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

function LoginsPage() {
  const [showPassword, setShowPassword] = useState(true);
  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="bg-[#0D47A1] h-[100vh] flex justify-center items-center">
      <div className="bg-white p-[10em] shadow-xl box-border rounded-xl ">
        <div className="border-2  rounded-lg w-full shadow-lg my-[20px]">
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
        <div>
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
}

export default LoginsPage;
