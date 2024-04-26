import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "./Loader";

import { useNavigate } from "react-router-dom";

// import { Navigate, useNavigate } from "react-router-dom";

function Signs() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSelection, setRegisterSelection] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });

  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleRegistration(e) {
    e.preventDefault();
    if (formData.fullName === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.email === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.phoneNumber === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.confirmPassword === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("The Password does not match");
    }
    if (formData.userType === "") {
      setErrorMessage(
        "Kindly select either as an Interior designer or a Client"
      );
    }
    if (formData.password.length < 6) {
      setErrorMessage("Password should be atleast 6 Characters");
    } else {
      setIsLoading(true);
      setErrorMessage("");
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then(async (userDetails) => {
          const user = userDetails.user;
          console.log(user);
          if (user) {
            const docRef = await addDoc(
              collection(db, "userInformation"),
              formData
            );
            console.log("Document written with ID: ", docRef.id);
            setIsLoading(false);

            navigate("/login");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(error)
          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("An account with that emaill already exists");
          }
        });
    }

    // function handleSave() {
    //   setLoading(true);

    //   for (let i = 1; i < 20000; i++) {
    //     setLoading(false);
    //   }
    // }
  }

  function handleRegisterSelection(selection) {
    setRegisterSelection(selection);
    setFormData((prev) => ({ ...prev, userType: selection }));
  }
  return (
    <div className="bg-[#0D47A1] h-[100vh] flex justify-center items-center">
      {isLoading && <Loader />}
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
              name="fullName"
              onChange={handleChange}
            />
          </div>

          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Email"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="number"
              placeholder="Phone Number"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>

          <div className="border-2  rounded-lg  shadow-lg flex">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="password"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="password"
              onChange={handleChange}
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
              type={showPassword ? "password" : "text"}
              placeholder="Confirm Passsword"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <p className="text-red-400">{errorMessage}</p>

          <div className="flex w-full gap-7">
            <div className="flex-1">
              <label
                onClick={() => handleRegisterSelection("designer")}
                htmlFor="designer"
                className="bg-[#4c87e0] flex gap-4 justify-center items-center py-[2em] cursor-pointer hover:bg-[#0D47A1]"
                style={{
                  backgroundColor:
                    registerSelection === "designer" ? "#0D47A1" : "#4c87e0",
                }}
              >
                <input
                  type="radio"
                  name="type"
                  id="designer"
                  className="hidden radio"
                />
                <div className=" flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#0D47A1] hidden"></div>
                </div>
                <label htmlFor="" className="text-white font-bold">
                  Interior Designer
                </label>
              </label>
            </div>
            <div className="flex-1">
              <label
                onClick={() => handleRegisterSelection("client")}
                htmlFor="client"
                className="bg-[#4c87e0] flex gap-4 justify-center items-center py-[2em] cursor-pointer"
                style={{
                  backgroundColor:
                    registerSelection === "client" ? "#0D47A1" : "#4c87e0",
                }}
              >
                <input
                  type="radio"
                  name="type"
                  id="client"
                  className="hidden radio"
                />
                <div className=" flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#0D47A1] hidden"></div>
                </div>

                <label htmlFor="" className="text-white font-bold">
                  Client
                </label>
              </label>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              onClick={handleRegistration}
              className="bg-[#0D47A1] px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold "
            >
              Create Account
            </button>
          </div>

          <div className="flex justify-center text-[25px]">
            Already Have An Account?{" "}
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
