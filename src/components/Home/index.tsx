import React from "react";

const homebg = new URL("../../assets/homebg.png", import.meta.url).href;
const backarrow = new URL("../../assets/backarrow.png", import.meta.url).href;
const homeImg = new URL("../../assets/homeImg.jpg", import.meta.url).href;

const Home: React.FC = () => {
  return (
    <section
      className="relative items-center flex h-[80vh] md:h-[100vh] pt-20 transition-all bg-[#353342] bg-cover rounded-b-md place-content-center"
      style={{
        backgroundImage: `url(${homebg})`,
        clipPath: `polygon(
          0 0, 
          100% 0, 
          100% calc(100% - 140px), 
          95% calc(100% - 105px), 
          90% calc(100% - 120px), 
          85% calc(100% - 94px), 
          80% calc(100% - 100px), 
          75% calc(100% - 86px), 
          70% calc(100% - 95px), 
          65% calc(100% - 60px), 
          60% calc(100% - 84px), 
          55% calc(100% - 40px), 
          50% calc(100% - 70px), 
          45% calc(100% - 50px), 
          40% calc(100% - 36px), 
          35% calc(100% - 40px), 
          30% calc(100% - 30px), 
          25% calc(100% - 20px), 
          10% calc(100%), 
          0 calc(100% - 20px)
        )`,
      }}
      id="#"
    >
      <div className="absolute inset-0 bg-[#353342] -z-10 opacity-80 rounded-b-md"></div>
      <div className="px-4 md:px-20 md:flex md:flex-row gap-5 mb-20">
        <div className="flex flex-col items- justify-center gap-14">
          <h2 className="text-[#FEF6E4] md:text-7xl text-4xl font-semibold">
            Partner for <br />
            every{" "}
            <span className="text-[#CDAF13]  font-thin italic">marketing</span>
            <br /> activites
          </h2>
          <div className="flex flex-row gap-4 items-start">
            <img src={backarrow} alt="Back" className="w-10" />
            <p className="text-[#FEF6E4] md:text-xl font-thin md:w-[500px]">
              We can support you with content marketing, employer branding, web
              development, performance marketing or social media marketing
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={homeImg} alt="" className="w-[400px] lg:w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
