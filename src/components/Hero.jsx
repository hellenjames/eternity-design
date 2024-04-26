import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
function Hero() {
  return (
    <section>
      <div className="flex flex-col gap-3 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/images/Home-Decor-Sim-Boon-Yang-BT20210924-XSA-015-00hero.avif')] h-[80vh] bg-no-repeat bg-cover justify-center" alt="hero">
        <div className="container mx-auto flex flex-col gap-2 justify-center">
          <h1 className=" text-[white] text-[4rem] font-bold ">
            Find the designers.
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
          <div className="flex text-white gap-5 mt-8">
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
              <img src="src/assets/images/icon-moon.svg" alt="icon" width={50}/>
              <h3 className="text-[1.5rem] font-medium">Get To know Us </h3>
              <p className="font-light">
                Dolor sit amet, consectetur adipisicing elit. Quam modi magni
                quia laudantium earum. Nesciunt vel voluptatem molestiae
                provident itaque, recusandae optio vitae voluptatibus, quisquam
                autem aliquid rerum, eaque sit!
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] bg-fixed flex flex-col justify-start items-start gap-3 p-[2em]">
            <img src="src/assets/images/icon-moon.svg" alt="icon" width={50}/>
              <h3 className="text-[1.5rem] font-medium">Find more</h3>
              <p className="font-light">
                Dolor sit amet, consectetur adipisicing elit. Quam modi magni
                quia laudantium earum. Nesciunt vel voluptatem molestiae
                provident itaque, recusandae optio vitae voluptatibus, quisquam
                autem aliquid rerum, eaque sit!
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
            <img src="src/assets/images/icon-moon.svg" alt="icon" width={50}/>
              <h3 className="text-[1.5rem] font-medium">Know More </h3>
              <p className="font-light">
                Dolor sit amet, consectetur adipisicing elit. Quam modi magni
                quia laudantium earum. Nesciunt vel voluptatem molestiae
                provident itaque, recusandae optio vitae voluptatibus, quisquam
                autem aliquid rerum, eaque sit!
              </p>
            </div>
            <div className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] flex flex-col justify-start items-start gap-3 p-[2em]">
            <img src="src/assets/images/icon-moon.svg" alt="icon" width={50}/>
              <h3 className="text-[1.5rem] font-medium">Learn More </h3>
              <p className="font-light">
                Dolor sit amet, consectetur adipisicing elit. Quam modi magni
                quia laudantium earum. Nesciunt vel voluptatem molestiae
                provident itaque, recusandae optio vitae voluptatibus, quisquam
                autem aliquid rerum, eaque sit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
