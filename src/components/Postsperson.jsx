function Postperson({img,name,details}){
    return(
        <div className="bg-slate-200">
            <div className="flex w-[300px] h-[500px]  flex-row items-center justify-center">
                <img src={img} width={200}/>
            </div>
            <div className="flex-col gap-3 items-center">
<p className="">{name}</p>
<p>{details}</p>
            </div>
            
        </div>
    )
}
export default Postperson