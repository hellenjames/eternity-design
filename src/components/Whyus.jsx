import { Link } from "react-router-dom";

function Whyus() {
  return (
    <section>
      <div className="flex-wrap text-2xl text-[#0D47A1] text-center font-bold my-7">
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
              <button className="border rounded-full py-4 px-[4em] bg-[#0D47A1] text-[white] font-bold outline-none ">
                Log In Today
              </button>
            </Link>
          </div>
          <div className="flex-1">
            <p className="flex text-center justify-center items-center text-[#0D47A1] text-2xl mt-5">
              Testimonials
            </p>
            <div className="flex">
              <div className="flex items-center">
                <div className="flex  items-center ">
                  <img
                    src="src/assets/images/back.png"
                    alt="back"
                    width={300}
                  />
                </div>

                <div className="flex justify-center items-center flex-col">
                  <img
                    className="border rounded-xl "
                    src="src/assets/images/img4.jpg"
                    alt="avatar"
                    width={200}
                  />
                  <p className="">
                    "Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected.I can suggest for anyone
                    else who needs to with connnected interior designers to
                    fetch from this website for they do great connections and
                    the designers does great woek too from what i saw."
                  </p>
                  <p className="text-[#0D47A1] text-2xl">By C.H</p>
                </div>
                <div>
                  <img
                    src="src/assets/images/next.png"
                    alt="next"
                    width={300}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="border rounded-xl "
                    src="src/assets/images/img1.jpg"
                    alt="avatar"
                    width={200}
                  />
                  <p className="">
                    "Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected.I can suggest for anyone
                    else who needs to with connnected interior designers to
                    fetch from this website for they do great connections and
                    the designers does great woek too from what i saw."
                  </p>
                  <p className="text-[#0D47A1] text-2xl">By C.H</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="border rounded-xl "
                    src="src/assets/images/img2.png"
                    alt="avatar"
                    width={200}
                  />
                  <p className="">
                    "Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected.I can suggest for anyone
                    else who needs to with connnected interior designers to
                    fetch from this website for they do great connections and
                    the designers does great woek too from what i saw."
                  </p>
                  <p className="text-[#0D47A1] text-2xl">By C.H</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="border rounded-xl "
                    src="src/assets/images/img3.jpg"
                    alt="avatar"
                    width={200}
                  />
                  <p className="">
                    "Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected.I can suggest for anyone
                    else who needs to with connnected interior designers to
                    fetch from this website for they do great connections and
                    the designers does great woek too from what i saw."
                  </p>
                  <p className="text-[#0D47A1] text-2xl">By C.H</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex justify-center items-center flex-col">
                  <img
                    className="border rounded-xl "
                    src="src/assets/images/img7.webp"
                    alt="avatar"
                    width={200}
                  />
                  <p className="">
                    "Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected.I can suggest for anyone
                    else who needs to with connnected interior designers to
                    fetch from this website for they do great connections and
                    the designers does great woek too from what i saw."
                  </p>
                  <p className="text-[#0D47A1] text-2xl">By C.H</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Whyus;
