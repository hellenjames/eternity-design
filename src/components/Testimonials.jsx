import React from "react";
import Testimonial from "./Testimonial";
import img7 from "../assets/images/img7.webp";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.png";
import img1 from "../assets/images/img1.jpg";

function Testimonials() {
  return (
    <div className="container mx-auto mb-[4em]">
      <p className="flex justify-center text-[#0D47A1] text-5xl font-bold mt-[2em] mb-5">
        What Our Clients Say
      </p>
      <div className="flex justify-center gap-[6em] mt-[3em]">
        <Testimonial
          img={img7}
          name="Etern Desn"
          details="Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected."
        />
        <Testimonial
          img={img4}
          name="Desn Estern"
          details="Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected."
        />
        <Testimonial
          img={img1}
          name="Connie Hellie"
          details="Am a client who wanted an interior designer that could help
                    in finishing up of my house. I had nice experience with
                    Eternity Design services .They were able to connect me with
                    the designer which made my work more easier and it was done
                    perfect more than i had expected."
        />
      </div>
    </div>
  );
}

export default Testimonials;
