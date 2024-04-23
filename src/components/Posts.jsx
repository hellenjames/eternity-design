import Postperson from "./Postsperson";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.jpg";
function Posts() {
  return (
    <div className="flex-wrap container mx-auto">
      <div className="flex justify-between">
        <Postperson img={img1} name="A" details="" />
        <Postperson img={img2} name="B" details="" />
        <Postperson img={img3} name="C" details="" />
        <Postperson img={img4} name="D" details="" />
      </div>
    </div>
  );
}
export default Posts;