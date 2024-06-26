import { IoLocation } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Designereach({ img, name,description, details, address, companiesName, tags }) {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  function handleSingleDesigner(path, options) {
    navigate(path, options);

  }
  return (
    <div className="bg-slate-200 p-4 cursor-pointer" onClick={()=>handleSingleDesigner(`/designers/${companiesName}`, {state:{img,description ,name, details, address, companiesName, tags}})}>
      <div className="flex   justify-center mt-4">
        <div>
          <img src={img} width={200} />
        </div>
      </div>
      <div className="flex-col gap-3 items-center">
        <p className="text-center">{name}</p>
        <p className="text-center">{details}</p>
        <p className="text-center text-4xl text-[#0D47A1]">{companiesName}</p>
      </div>
      <div>,,
        
        <p className="flex justify-center">
          <IoLocation size={20} />:{address}
        </p>
      </div>
      <div className="flex gap-3 text-[#0D47A1] font-bold my-3 ">
        {tags.split(",").map((item) => {
          return (
            <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default Designereach;
