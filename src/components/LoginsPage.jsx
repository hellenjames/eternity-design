import { FaRegEyeSlash } from "react-icons/fa";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { LuEye } from "react-icons/lu";
import { addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { collection, query, where, and, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { EternityContext } from "../context/state";

function LoginsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, setCurrentUser } = useContext(EternityContext);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  useEffect(() => {});
  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleRegistration(e) {
    e.preventDefault();

    if (formData.email === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password.length < 6) {
      setErrorMessage("Password should be atleast 6 Characters");
    } else {
      setIsLoading(true);

      signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
        formData.userType
      )
        .then(async (userData) => {
          const user = userData.user;
          console.log(user);

          if (user) {
            const q = query(
              collection(db, "userInformation"),
              and(where("email", "==", formData.email))
            );

            getDocs(q).then((qSnap) => {
              const data = qSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
              console.log(data);
              setCurrentUser(data[0]);
              const { password, ...others } = data[0];
              localStorage.setItem("user", JSON.stringify(others));
              console.log(data[0]);

              if (data && data[0].userType === "designer") {
                navigate("/formdetails");
              } else if (data[0].userType === "client") {
                navigate("/designer");
              } else if (data[0].userType === "client") {
                navigate("/designer");
                setIsLoading(false);
              }
            });

            console.log(q);
          }
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage("Login Failed. Please try again");
          setIsLoading(false);
        });
    }
  }

  return (
    <>
      <div className="bg-[#0D47A1] h-[100vh] flex justify-center items-center ">
        {isLoading && <Loader />}
        <div className="bg-white p-[10em] shadow-xl box-border rounded-xl flex flex-col gap-[2em]">
          <div className="flex justify-center text-center text-5xl text-[#0D47A1]">
            Log In
          </div>
          <div
            className="border-2  rounded-lg w-full shadow-lg "
            onChange={handleChange}
          >
            <input
              type="text"
              placeholder="Email"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="email"
            />
          </div>
          <div
            className="border-2  rounded-lg  shadow-lg flex"
            onChange={handleChange}
          >
            <input
              type={showPassword ? "password" : "text"}
              placeholder="password"
              className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
              name="password"
            />
            <div
              className="flex  items-center text-[20px] cursor-pointer pr-4"
              onClick={changeThePassword}
            >
              {showPassword ? <LuEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <p className="text-red-400">{errorMessage}</p>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p>Remember me</p>
            </div>
            <p className="text-[#0D47A1] underline underline-offset-2 cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <div className="flex justify-center " onClick={handleRegistration}>
            <a
              href="#"
              className="bg-[#0D47A1] px-[7em] py-5 rounded-[2em] shadow-lg text-white font-bold"
            >
              Log in
            </a>
          </div>
          <div className="flex justify-center  text-[20px] my-2">
            Dont Have An Account Yet?
            <a href="/signup" className="text-[#0D47A1]">
              Sign Up Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginsPage;
