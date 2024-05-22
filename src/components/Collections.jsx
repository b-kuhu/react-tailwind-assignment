import { useEffect, useState } from "react";
import logoImg from "../assets/Emlblem.png";
import image1 from "../assets/collection/image1.png";
import image2 from "../assets/collection/image2.png";
import image3 from "../assets/collection/image3.png";
import image4 from "../assets/collection/image4.png";
import asterix from "../assets/asterix.png";
import person1 from "../assets/people/person1.png";
import person2 from "../assets/people/person2.png";
import person3 from "../assets/people/person3.png";
import person4 from "../assets/people/person4.png";
import person5 from "../assets/people/person5.png";
import Events from "./Events";
const slides = [image1, image2, image3, image4];

const content = [
  "Event : Oasis Bus tour , JLN Stadium , Delhi ",
  "Collection Live : Meta Lives , live on astrix",
];

const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);

  const [page, setPage] = useState(false);
  const handleClick = () => {
    setPage(true);
  };
  // set interval for collections autoplay slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // set interval for veritcal slider
  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {page && <Events />}
      {!page && (
        <div>
          <div className="bg-black relative">
            <div className="pl-4 pb-4 ml-8 font-lexend flex absolute bottom-0 z-1">
              <p
                onClick={handleClick}
                className="text-white bg-gray-800 py-2 px-8 rounded-l-3xl cursor-pointer"
              >
                Events
              </p>
              <p className="text-white bg-gray-600 py-2 px-8 rounded-r-3xl cursor-pointer">
                Collections
              </p>
            </div>
            {/* LOGO */}
            <div className="flex items-center p-8 text-yellow-500">
              <img className="bg-yellow-500" src={logoImg} alt="logo" />
              <h1 className="text-xl font-bold">Astrix</h1>
            </div>

            {/* BACKGROUND HEADING */}
            <div className="w-[400px] h-[708px] px-4 mx-4">
              <p className="uppercase text-[#FFFFFF] text-opacity-20 text-9xl leading-32 break-words font-lexend">
                Astrix collectible
              </p>
            </div>
            <div className="flex gap-10 absolute top-[20%] left-[15%]">
              {/* AUTOPLAY SLIDER */}
              <div className="flex gap-8 w-[50%] overflow-hidden">
                {slides.map((src, index) => (
                  <img
                    className="h-[90vh]"
                    key={index}
                    style={{
                      transform: `translateX(-${currentIndex * 90}%)`,
                      opacity: `${index == currentIndex ? "1" : "0.5"}`,
                    }}
                    src={src}
                    alt={`Slide ${index}`}
                  />
                ))}
              </div>
              {/* EVENT DETAILS */}
              <div className="text-white font-lexend w-[47%] pl-20 absolute right-0 top-[-25%]">
                <p className="text-xl font-bold py-8 w-[60%]">
                  Explore Your First Collectible
                </p>
                <h1 className="text-4xl font-bold w-[50%] leading-[2.75rem]">
                  Meta Lives
                </h1>
                <p className="py-4">Live in Astrix</p>
                <p className="text-[0.85rem]">
                  Join us for an evening of enchantment at the Grand Gala
                  Extravaganza, where the stars align to create unforgettable
                  memories.
                </p>
                <div className="grid grid-cols-2 my-8">
                  <div className="flex relative ">
                    <img
                      className="absolute left-0 z-0"
                      src={person1}
                      alt="person1"
                    />
                    <img
                      className="absolute left-[12%] z-10"
                      src={person2}
                      alt="person2"
                    />
                    <img
                      className="absolute left-[24%] z-20"
                      src={person3}
                      alt="person3"
                    />
                    <img
                      className="absolute left-[36%] z-30"
                      src={person4}
                      alt="person4"
                    />
                    <img
                      className="absolute left-[48%] z-40"
                      src={person5}
                      alt="person5"
                    />
                  </div>
                  <p className="p-2 text-[0.75rem] ">22k people interested</p>
                </div>
                <p className="pb-8">Collectibles</p>
                <div className="flex gap-4 text-black overflow-hidden">
                  <div className="flex flex-col justify-center bg-[#B9A0FF] p-2 rounded-lg flex-shrink-0">
                    <div className="flex justify-between text-[0.65rem]">
                      <p className="bg-black text-white rounded-3xl px-2">
                        2024
                      </p>
                      <p>By Pablo</p>
                    </div>
                    <h1 className="text-center my-2 text-[0.65rem] font-semibold ">
                      Collectible Name
                    </h1>
                    <img
                      className="w-[150px] h-[200px] border-[1px] border-black rounded-lg"
                      src={image2}
                      alt="collectibles-image"
                    />
                  </div>
                  <div className="flex flex-col justify-center bg-[#B9A0FF] p-2 rounded-lg flex-shrink-0">
                    <div className="flex justify-between text-[0.65rem]">
                      <p className="bg-black text-white rounded-3xl px-2">
                        2024
                      </p>
                      <p>By Pablo</p>
                    </div>
                    <h1 className="text-center my-2 text-[0.65rem] font-semibold ">
                      Collectible Name
                    </h1>
                    <img
                      className="w-[150px] h-[200px] border-[1px] border-black rounded-lg"
                      src={image2}
                      alt="collectibles-image"
                    />
                  </div>
                  <div className="flex flex-col justify-center bg-[#B9A0FF] p-2 rounded-lg flex-shrink-0">
                    <div className="flex justify-between text-[0.65rem]">
                      <p className="bg-black text-white rounded-3xl px-2">
                        2024
                      </p>
                      <p>By Pablo</p>
                    </div>
                    <h1 className="text-center my-2 text-[0.65rem] font-semibold ">
                      Collectible Name
                    </h1>
                    <img
                      className="w-[150px] h-[200px] border-[1px] border-black rounded-lg"
                      src={image2}
                      alt="collectibles-image"
                    />
                  </div>
                </div>
                <div className="flex justify-end m-4 pt-10 ">
                  <button className="bg-[#FFCA5F] text-black p-2 font-medium rounded-3xl">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
            {/* VERTICAL SLIDER */}
            <div className="bg-[#B9A0FF] font-kronaOne flex items-center p-2 text-2xl gap-2 rotate-90 fixed top-[45%] left-[35%] w-[100vh] overflow-hidden transition-transform ease duration-700">
              {content.map((item, index) => (
                <p
                  key={index}
                  className="flex-shrink-0 flex gap-4 items-center"
                  style={{ transform: `translateX(-${contentIndex * 50}%)` }}
                >
                  {item}
                  <img src={asterix} alt="asterix" />
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Collections;
