function Designereach({ img, name, details }) {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-center">
        <img className="" src="src/assets/images/Design Logo.png" width={100} />
      </div>
      <div className="flex   justify-center mt-4">
        <div>
          <img src={img} width={200} />
        </div>
      </div>
      <div className="flex-col gap-3 items-center">
        <p className="text-center">{name}</p>
        <p className="text-center">{details}</p>
      </div>
      <div className="flex gap-3 text-[#0D47A1] font-bold my-3 ">
        <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">Weddings</p>
        <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">Graduations</p>
        <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">Offices</p>
        <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">Hotels</p> 
      </div>
    </div>
  );
}
export default Designereach;
