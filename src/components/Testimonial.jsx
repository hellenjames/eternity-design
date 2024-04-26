function Testimonial({img,name,details}){
    return(
            <div className="shadow-[0_0_5px_lightgray] ">
           <div className="flex   justify-center mt-4">
        <div className="flex">
          <img src={img} width={200} />
        </div> 
        </div>
        <div className="flex gap-3 justify-center p-6">
            <div className="flex justify-center flex-col items-center">
                <p className="text-[#0D47A1] font-bold"> {name}</p>
                <p className="">{details}</p>
            </div>
            </div>
        </div>
    )
}
export default Testimonial