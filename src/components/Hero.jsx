import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
function Hero() {
  return (
    <section>
      <div className="   flex flex-col gap-3 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/images/Home-Decor-Sim-Boon-Yang-BT20210924-XSA-015-00hero.avif')] h-[80vh] bg-no-repeat bg-cover justify-center" alt="hero">
        <div className="container mx-auto flex flex-col gap-2 justify-center">
          <h1 className=" text-[white] text-[4rem] font-bold ">
            Find Designers.
          </h1>
          <div className="flex flex-col gap-6">
            <p className="text-xl text-[white] w-[50%]">
              Each day have new and latest design that comes up.Eternity will be
              able to assist you get best designers that enable your work be
              easy.Get to reach us and make you comfortable today.best designs
              and ideas.
            </p>
            <div className="flex gap-4 ">
              <button className="border rounded-full py-4 px-[4em] bg-[transparent] text-[white] font-bold outline-none hover:bg-[#0D47A1]">
                Get Started
              </button>
              <button className="border border-[#0D47A1] rounded-full py-4 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none hover:bg-[transparent] hover:border-white" onClick={()=><Aboutus/>}>
                About Us
              </button>
            </div>
          </div>
          <div className="flex flex-wrap text-white gap-5 mt-8">
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
              {/* <img src="" alt="icon" width={50}/> */}
              <h3 className="text-[1.5rem] font-medium">Get To know Us </h3>
              <p className="font-light">
                Through our app we allow designers to get connected with clients and do their designings.Through that we clients are able to get any designer and get their work done.
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] bg-fixed flex flex-col justify-start items-start gap-3 p-[2em]">
            {/* <img src="" alt="icon" width={50}/> */}
              <h3 className="text-[1.5rem] font-medium">Find more</h3>
              <p className="font-light">
                Clients get each type of designer and their work done.With that we have a page that consists uploaded different images of designers with their more details.
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
            {/* <img src="" alt="icon" width={50}/> */}
              <h3 className="text-[1.5rem] font-medium">Know More </h3>
              <p className="font-light">
                The designers do their part of designing and after that they are able to get get their payments from us after the clients approves their work.
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
            {/* <img src="" alt="icon" width={50}/> */}
              <h3 className="text-[1.5rem] font-medium">Learn More </h3>
              <p className="font-light">
               The client pays the designers  salary to be paid to designer after talking with the designers and agree.the client gives the money to us and the work is done the designer gets their share.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
