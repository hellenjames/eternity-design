import { useState,useContext } from "react";
import { EternityContext } from "../context/state";
function Designersearch() {
  const { searchKeyword, setSearchKeyword } = useContext(EternityContext);
  return (
    <div className="container mx-auto flex justify-center w-[100%]">
      <div className="flex items-center   border border-[#0D47A1] rounded-full px-5 gap-3 mt-6 w-[50%] mx-auto justify-between py-1 mb-[5em]">
        <div className=" flex-1 border-r-2  border-r-[#0D47A1] gap-4">
          <input
            className=" w-[100%] text-[#0D47A1] text-[1.2em] rounded-full my-5 py-3 px-[1em] outline-none "
            type="text"
            placeholder="Search Designer by keyword "
            onChange={(e) =>
              setSearchKeyword((prev) => ({ ...prev, keyword: e.target.value }))
            }
          />
        </div>
        <div className="flex gap-2 py-2 ">
          <select
            className="px-2 select outline-none text-[1.2em] text-[#0D47A1] p-3 "
            onChange={(e) =>
              setSearchKeyword((prev) => ({ ...prev, tag: e.target.value }))
            }
          >

            <option disabled selected>
              Filter by Tag
            </option>
            <option>Weddings </option>

            <option>Birthdays </option>

            <option>Tents </option>
          </select>

          <select
            className="px-2 select outline-none text-[1.2em] text-[#0D47A1] "
            onChange={(e) =>
              setSearchKeyword((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
          >
            <option disabled selected>
              Filter by Location
            </option>
            <option>Nairobi </option>

            <option>Mombasa </option>

            <option>Nakuru </option>
          </select>
        </div>
        {console.log(searchKeyword)}
      </div>
    </div>
  );
}
export default Designersearch;
