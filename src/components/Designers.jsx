import Designereach from "./Designereach";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.webp";
import img8 from "../assets/images/img8.jpg";
import { EternityContext } from "../context/state";
import { useState, useEffect, useContext } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Designers() {
  const { searchKeyword, setSearchKeyword } = useContext(EternityContext);
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    fetchDetails();
  }, []);
  async function fetchDetails() {
    const querySnapshot = await getDocs(collection(db, "designers"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setDisplay((prev) => [...prev, doc.data()]);
    });
  }

  return (
    <>
      <div className="flex-wrap container mx-auto">
        {console.log(display)}
        <div className="flex gap-7">
          {display &&
            display.map((item) => {
              if (
                item.companiesName
                  .toLowerCase()
                  .includes(searchKeyword.keyword) &&
                item.tags.toLowerCase().includes(searchKeyword.tag.toLowerCase()) &&
                item.address.toLowerCase().includes(searchKeyword.location.toLowerCase())
              ) {
                return (
                  <Designereach
                    img={item.logoImage}
                    name={item.name}
                    details={item.details}
                    address={item.address}
                    companiesName={item.companiesName}
                    tags={item.tags}
                  />
                );
              }
            })}
        </div>
      </div>
    </>
  );
}
export default Designers;
