import { getStorage, ref, uploadString } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
function Formdetail() {
  const [registerValidation, setRegisterValidation] = useState("");
  const [formStorage, setFormStorage] = useState({
    companiesName: "",
    address: "",
    serviceOffered: "",
    image: "",
  });
  function handleChangeImage(e) {
    const storage = getStorage();
    const file = e.target.files[0];
    const storageRef = ref(storage, `designers/${file.name}`);
    const reader = new FileReader();
    reader.onloadend = function () {
      const dataResult = reader.result;
      uploadString(storageRef, dataResult, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");
        formStorage.image = `https://firebasestorage.googleapis.com/v0/b/eternity-design.appspot.com/o/designers%2F${file.name}?alt=media`;
      });

      console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleStorageData(e) {
    setFormStorage({ ...formStorage, [e.target.name]: e.target.value });
  }

  async function handlePostSubmit() {
    if (formStorage.companiesName === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    }
    if (formStorage.address === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    }
    if (formStorage.serviceOffered === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    } else {
      const docRef = await addDoc(collection(db, "inputs"), formStorage);
      console.log("Document written with ID: ", docRef.id);
    }
  }

  return (
    <div className="bg-[#0D47A1] h-[70vh] flex justify-center items-center">
      <div className="flex flex-col p-[5em] bg-white gap-3 shadow-lg rounded-lg">
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Companies Name:"
            className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            name="companiesName"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Address:"
            className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            name="address"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Services Offered:"
            className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
            name="servicesOffered"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <p className="text-red-400">{registerValidation}</p>

        <input
          type="file"
          placeholder="file"
          className=" py-5 pr-[20em] px-2 bg-transparent outline-none flex-1 "
          onChange={(e) => handleChangeImage(e)}
          name="image"
        />
        <div className="flex justify-center ">
          <button
            onClick={handlePostSubmit}
            className="bg-[#0D47A1] px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Formdetail;
