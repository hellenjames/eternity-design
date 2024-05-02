import { getStorage, ref, uploadString } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useState } from "react";
import loader from "../assets/images/loader.gif";
function Formdetail() {
  const [registerValidation, setRegisterValidation] = useState("");
  const [formStorage, setFormStorage] = useState({
    companiesName: "",
    address: "",
    tags: "",
    description: "",
    detailedInformation: "",
    logoImage: "",
    projectImages: [],
    imageDisplay: "",
  });

  const [isLoading, setIsLoading] = useState({
    logo: false,
    display: false,
    projects: false,
  });

  let logoImg;
  let displayImg;
  const images = [];

  function handleChangeImage(e, imageType) {
    const files = e.target.files;
    const reader = new FileReader();

    if (imageType === "logo") {
      const storageRef = ref(storage, `designers/${files[0].name}`);
      reader.onloadend = function () {
        const dataResult = reader.result;
        console.log("RESULT", reader.result);

        uploadString(storageRef, dataResult, "data_url").then((snapshot) => {
          console.log("Uploaded a data_url string!");
          setFormStorage({
            ...formStorage,
            logoImage: `https://firebasestorage.googleapis.com/v0/b/eternity-design.appspot.com/o/designers%2F${files[0].name}?alt=media`,
          });
        });
      };
      reader.readAsDataURL(files[0]);
    }

    if (imageType === "display") {
      const storageRef = ref(storage, `designers/${files[0].name}`);
      reader.onloadend = function () {
        const dataResult = reader.result;
        uploadString(storageRef, dataResult, "data_url").then((snapshot) => {
          console.log("Uploaded a data_url string!");
          formStorage.imageDisplay = `https://firebasestorage.googleapis.com/v0/b/eternity-design.appspot.com/o/designers%2F${files[0].name}?alt=media`;
        });
        console.log("RESULT", reader.result);
      };
      reader.readAsDataURL(files[0]);
    }

    if (imageType === "multiple") {
      console.log(Array.from(files).length);

      for (let i = 0; i < Array.from(files).length; i++) {
        const reader = new FileReader();
        console.log(files[i]);
        const storageRef = ref(storage, `designers/${files[0].name}`);
        reader.onloadend = function () {
          const dataResult = reader.result;

          uploadString(storageRef, dataResult, "data_url").then((snapshot) => {
            console.log("Uploaded a data_url string!");

            images.push(
              `https://firebasestorage.googleapis.com/v0/b/eternity-design.appspot.com/o/designers%2F${files[i].name}?alt=media`
            );
          });

          console.log("RESULT", reader.result);
        };

        // console.log(files[i]);

        reader.readAsDataURL(files[i]);

      }


      setFormStorage({ ...formStorage, projectImages, imageDisplay: images });
    }

    // reader.readAsDataURL(file);

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
    if (formStorage.tags === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    }
    if (formStorage.description === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    }
    if (formStorage.detailedInformation === "") {
      setRegisterValidation("Kindly fill all the empty Fields");
    }

    if (formStorage.logoImage === "") {
      setRegisterValidation("Kindly upload all images");
    }
    if (formStorage.projectImages === "") {
      setRegisterValidation("Kindly upload all images");
    }
    if (formStorage.imageDisplay === "") {
      setRegisterValidation("Kindly upload all images");
    } else {
      setRegisterValidation("");
      const docRef = await addDoc(collection(db, "designers"), formStorage);
      console.log("Document written with ID: ", docRef.id);
      if (docRef.id) {
        setFormStorage({
          companiesName: "",
          address: "",
          tags: "",
          description: "",
          detailedInformation: "",
          logoImage: "",
          projectImages: [],
          imageDisplay: "",
        });
      }
    }
  }

  return (
    <div className="bg-[#0D47A1] h-[150vh] flex justify-center items-center">
      <div className="flex flex-col p-[2em] bg-white gap-3 shadow-lg rounded-lg w-[40%]">
        <div className="border-2  rounded-lg  shadow-lg  ">
          <input
            type="text"
            placeholder="Companies Name:"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none"
            name="companiesName"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Address:"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            name="address"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Enter commer seperated Tags e.g wedding, graduations etc:"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            name="tags"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <input
            type="text"
            placeholder="Short Description:"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            name="description"
            onChange={(e) => handleStorageData(e)}
          />
        </div>
        <div className="border-2  rounded-lg  shadow-lg flex">
          <textarea
            name="detailedInformation"
            id=""
            cols="30"
            rows="10"
            type="text"
            placeholder="Detailed Information About Company:"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 resize-none"
            onChange={(e) => handleStorageData(e)}
          ></textarea>
        </div>
        <p className="text-red-400">{registerValidation}</p>
        <div>
          <h2 className="underline underline-offset-2">Upload Company Logo:</h2>
          <input
            type="file"
            placeholder="file"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            onChange={(e) => handleChangeImage(e, "logo")}
            name="logoImage"
          />
          {isLoading.logo && loader}
          {formStorage.logoImage && (
            <img src={formStorage.logoImage} width={100} />
          )}
        </div>
        <div>
          <h2 className="underline underline-offset-2">
            Uplaod images of projects done:
          </h2>
          <input
            type="file"
            placeholder="file"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            onChange={(e) => handleChangeImage(e, "multiple")}
            name="projectImages"
            multiple
          />
          {isLoading.projects && loader}
          {/* {
            formStorage.projectImages.map && <img src={formStorage.projectImages}/>
          } */}
        </div>
        <div>
          <h2 className="underline underline-offset-2">
            Uplaod image to be displayed on page:
          </h2>
          <input
            type="file"
            placeholder="file"
            className=" py-5 w-[100%] px-2 bg-transparent outline-none flex-1 "
            onChange={(e) => handleChangeImage(e, "display")}
            name="imageDisplay"
          />
          {isLoading.display && loader}
          {formStorage.imageDisplay && (
            <img src={formStorage.imageDisplay} width={100} />
          )}
        </div>

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
