function Designereach({ img, name, details,address,companiesName,tags }) {
  return (
    <div className="bg-slate-200">
     
      <div className="flex   justify-center mt-4">
        <div>
          <img src={img} width={200} />
        </div>
      </div>
      <div className="flex-col gap-3 items-center">
        <p className="text-center">{name}</p>
        <p className="text-center">{details}</p>
        <p className="text-center">{companiesName}</p>
      </div>
      <div> <p className="flex justify-center">Location:{address}</p></div>
      <div className="flex gap-3 text-[#0D47A1] font-bold my-3 ">
       
       {
        tags.split(",").map(item=>{
          return (
            <p className="border rounded-xl py-1 px-3 bg-[#0D47A1] text-white">{item}</p>

          )
        })
       }
      </div>
    </div>
  );
}
export default Designereach;
