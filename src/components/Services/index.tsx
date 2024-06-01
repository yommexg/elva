import { PiArrowCircleDownThin, PiArrowCircleRightThin } from "react-icons/pi";
import { serviceData } from "./data";
import { useState } from "react";

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <section
      id="services"
      className="min-h-[100vh] flex flex-col gap-5 px-6 md:px-20 justify-center items-center"
    >
      <h2 className="text-center border-b-2 text-[#353342] border-yellow-400 md:text-lg">
        OUR SERVICES
      </h2>
      <p className="text-2xl font-semibold">Where Tech Meets Success</p>
      <p className="text-center md:text-lg md:px-20 md:w-[1000px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quis
        ullam iure vel! Hic iste, consequatur placeat fugit amet laboriosam
        ullam repellat esse, minus, nesciunt aliquid non labore facilis
        cupiditate.
      </p>
      <div className="flex flex-col gap-12 mt-12 md:hidden">
        {serviceData.map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: item.color,
            }}
            className="px-8 py-12 rounded-lg"
          >
            {item.icon}
            <h2 className="mt-8 text-2xl w-[200px] font-semibold pb-3">
              {item.title}
            </h2>
            <p className="border-t pt-3 border-black">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="md:flex justify-center flex-row flex-wrap gap-5 mt-12 hidden">
        {serviceData.map((item, index) => (
          <div
            key={item.title}
            style={{
              backgroundColor: item.color,
            }}
            className="px-8 py-12 flex flex-col justify-between rounded-lg w-[300px] h-[500px] transition-all duration-1500 ease-in-out"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold pb-3 w-[138px]">
                {item.title}
              </h2>
              {hoveredIndex === index ? (
                <PiArrowCircleDownThin size={40} />
              ) : (
                <PiArrowCircleRightThin size={40} />
              )}
            </div>
            {hoveredIndex === index && (
              <p
                className={`opacity-0 text-sm ${
                  hoveredIndex === index && "opacity-100"
                }`}
              >
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
