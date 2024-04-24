import { Link } from "react-router-dom";
function Hero() {
  return (
    <section>
      <div className=" justify-between items-center">
        <div className="flex flex-col justify-center items-center gap-3 bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('./src/assets/images/Home-Decor-Sim-Boon-Yang-BT20210924-XSA-015-00hero.avif')] h-[50vh] bg-no-repeat bg-cover">
          <h1 className=" text-[white] text-4xl text-center font-bold ">
            Best designers that enables the finishing of buildings be great.{" "}
          </h1>
          <p className="text-2xl text-[white] text-center font-bold  w-[50%]">
            Each day have new and latest design that comes up.Eternity will be
            able to assist you get best designers that enable your work be
            easy.Get to reach us and make you comfortable today.best designs and
            ideas.
          </p>
          <Link to="/about">
            {" "}
            <button
              className="border rounded-full py-2 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none flex justify-center
                "
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
