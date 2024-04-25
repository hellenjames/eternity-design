import { Link } from "react-router-dom";

function Whyus() {
  return (
    <section>
      <div className="text-2xl text-[#0D47A1] text-center font-bold my-7">
        <h2>Why Eternity Design</h2>
      </div>
      <div className=" bg-slate-200">
        <div className=" flex justify justify-between items-center gap-3 container mx-auto py-5 mb-5">
        <div className="   leading-[em]">
          <p className="text-2xl mt-5 flex-1">
            Why Choose<span className="text-[#0D47A1] "> Us</span>
          </p>
          <p className="w-[48%] p-3">
            We Enable You In Perfecting Your Skills By Providing For Clients
            When They Are Available.
          </p>
          <Link to="/log">
            <button className="border rounded-full py-2 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none ">
              Log In Today
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <p className="text-2xl mt-5 content-fit">
            Best Designers
            <span className="text-[#0D47A1] ">
              With Potential In Designing
            </span>
          </p>
          <p className="w-[50%] p-3">
            Choosing Eternity Designers is an investment in a design journey
            that changes the ordinary.It's about more than beautiful spaces;It's
            about creating environment where clients thrives,findinspiration,and
            truly feel at home.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
export default Whyus;
