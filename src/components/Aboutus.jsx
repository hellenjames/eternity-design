function Aboutus() {
  return (
    <section>
      <div className="bg-[#0D47A1] h-[60vh] flex justify-center items-center mt-5">
        <div className="flex flex-1 justify-between text-white h-[50vh] container mx-auto">
          <div className="w-[50%] ">
            <img
              className="w-full h-full object-cover"
              src="src/assets/images/home.avif" alt="about"
            />
          </div>
          <div className="flex-1 justify-between pl-8">
            <p className="text-5xl font-bold  mb-5">
              About Us
            </p>
            <p className=" flex-1 w-[70%] text-2xl">
              We connect the designers with the clients through registering and
              logging to our app.We started the apllications availability some
              years back and through it it has actually improved the skills of
              the designers and enabled the clients work easier than usual.Our
              main work is to let you be intouch with the best designers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Aboutus;
