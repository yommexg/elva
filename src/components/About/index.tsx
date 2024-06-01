import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

// Define the array of image URLs
const imageUrls = [
  new URL("../../assets/aboutImg/aboutImg1.jpg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg2.jpg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg3.jpg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg4.jpg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg5.jpg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg6.jpeg", import.meta.url).href,
  new URL("../../assets/aboutImg/aboutImg7.jpg", import.meta.url).href,
];

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 1s ease-in-out";
      containerRef.current.style.transform = `translateY(-${
        currentImageIndex * 100
      }%)`;
    }
  }, [currentImageIndex]);

  return (
    <section
      id="about"
      className="p-10 pt-28  h-[100vh] transition-all flex flex-col items-center md:flex-row gap-5 md:gap-20 md:justify-center relative"
    >
      <div className="h-[200px] w-[300px] overflow-hidden border-yellow-400 border-[5px] ">
        <div
          className="h-[200px] gap-2 flex flex-col bg-white z-10"
          ref={containerRef}
        >
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="AboutImg"
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center flex-col md:w-[500px] ">
        <h2 className="text border-b-2 text-[#353342] border-yellow-400 md:text-3xl">
          ABOUT US
        </h2>

        <p className="flex items-center gap-3 mt-5 text-[#403E39]  font-bold text-[18px] md:text-3xl italic">
          <FaQuoteLeft size={25} />
          Spark innovation, fuel growth
        </p>
        <p className="mt-4 font-semibold md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
          provident consectetur, temporibus nisi voluptates quam ratione iste
          magni nemo in quo laboriosam? Non placeat repellat praesentium. Culpa,
          harum laboriosam? Consequatur.
        </p>
        <button className="mt-4 rounded-xl px-6 py-3 text-white bg-[#353342]">
          Read more
        </button>
      </div>
    </section>
  );
};

export default About;
