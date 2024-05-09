import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Rockyinfo() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const { img,logoImage, description, name, details, address, companiesName, tags } =
    state;

    const handleBooking = ()=>{
navigate("/payments")
    }
  return (
    <div className="container mx-auto">
      <div className="flex justify-center ">
        <img src={img}/>
      </div>
      <div className="flex flex-col items-center justify-center text-2xl">
        <p>Location:{address}</p>
        <p>{description}</p>
        <button
          className="text-white my-4 bg-[#0D47A1] py-2 px-4 rounded-full"
          onClick={()=>navigate("/payments")}
        >
          Book {companiesName}
        </button>
        <p>
          The idea for Rocky Design Company began with the notion that customers
          deserved high-quality, immersive experiences when making major
          purchases for the home; a true "what-you-see-is-what-you-get"
          experience that would be easy for retailers and manufacturers to
          deliver without breaking the bank. As the word "home" helps form a key
          part of our name, that value still holds true over 5 years later. Our
          commitment to innovation has led to a wide range of solutions that
          utilize powerful, unique technologies to visualize the experience of
          choice for the consumer, enabling them to realize their dreams for
          their home more vividly and accurately than ever before; and branching
          out into numerous exciting applications that improve the way
          businesses work on a fundamental level. The world of commerce
          continues to move online at lighting speed, and as a corporation that
          has long held this vision, we are uniquely situated to help enable
          retailers, manufacturers, professional designers, and more to take
          that leap–and we know from experience that they will be thrilled with
          the results.
          {details}
        </p>
        <p className="text-[#0D47A1] font-bold"> Previous Work</p>
      </div>
      <div className="my-[5em] flex justify-center gap-6 w-[100%] h-[100%]">
        <div>
          <p>Wedding Interiors {tags}</p>
          <img className="h-[100%]" src="src/assets/images/wed.avif" />
        </div>
        <div>
          <p>Kitchen Interrior </p>
          <img className="h-[100%]" src="src/assets/images/ktn.avif" />
        </div>
        <div>
          <p>Office Interior</p>
          <img className="h-[100%]" src="src/assets/images/off.avif" />
        </div>
      </div>
    </div>
  );
}
export default Rockyinfo;
