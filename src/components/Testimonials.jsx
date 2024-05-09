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
                    Eternity Design services ."
        />
        <Testimonial
          img={img4}
          name="Desn Estern"
          details="I really needed a designer that could help in finishing up my hotel.And through the app i really got my problem solved.And the work was well done."
        />
        <Testimonial
          img={img1}
          name="Connie Hellie"
          details="Through Eternity design i was able to get assisted to the need that i needed and i can also reccommend any other person that's need help."
        />
      </div>
    </div>
  );
}

export default Testimonials;
