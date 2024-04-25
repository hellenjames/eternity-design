import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <section>   
         <div className="bg-[#0D47A1] h-[60vh] flex justify-center items-center ">
      <div className="flex flex-1 justify-between bg-white h-[50vh] container mx-auto">
        <div className="w-[50%] ">
          <img className="w-full h-full object-cover" src="src/assets/images/about.avif" />
        </div>
        <div className="flex-1 justify-between ">
          <p className="text-3xl font-bold text-[#0D47A1] text-center my-5">About Us</p>
          <p className=" flex-1 w-[70%] text-2xl pl-5">
            we connect the designers with the clients through registering and
            logging to our app.We started the apllications availability some
            years back and through it it has actually improved the skills of the
            designers and enabled the clients work easier than usual.Our main
            work is to let you be intouch with the best designers.
          </p>
        </div>
      </div>
    </div>
    </section>

  );
}
export default Aboutus;
