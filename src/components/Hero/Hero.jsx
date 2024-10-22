const Hero = () => {
  return (
    <div
      className="w-11/12 mx-auto mt-11 bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('/hero.png')",
        borderRadius:24,
        height:550,
      }}
    >
      {/* Content inside the Hero section */}
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="font-bold text-5xl text-white">Discover an exceptional cooking <br />class tailored for you!</h1>
        <p className="w-[50%] text-white mt-4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
        <div className="flex justify-center items-center">
          <button className="m-5 bg-[#0BE58A] p-4 rounded-full text-xl font-semibold">Explore Now</button>
          <button className="m-5 text-white p-4 border-white border-2 rounded-full" >Our Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
