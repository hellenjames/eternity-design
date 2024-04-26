import Hero from "../components/Hero";
import Designs from "../components/Designs";
import Whyus from "../components/Whyus";
import Aboutus from "../components/Aboutus";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Hero/>
      <Designs/>
      <Aboutus/>
      <Testimonials/>
      {/* <Whyus/> */}
      
    </div>
  );
}
export default Home;
