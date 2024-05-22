import logoImg from "../assets/Emlblem.png";
import { useState,useEffect } from "react";
import Collections from "./Collections";

import image1 from "../assets/Events/image1.png";
import image2 from "../assets/collection/image2.png";
import image3 from "../assets/Events/image3.png";
import image4 from "../assets/collection/image4.png";
import asterix from "../assets/asterix.png";

import artist1 from '../assets/Events/artists/image1.png'
import artist2 from '../assets/Events/artists/image2.png'
import artist3 from '../assets/Events/artists/image3.png'

import qrImg from '../assets/Events/qr.png';

const slides = [image1,image2,image3,image4]
const content = [
  "Event : Oasis Bus tour , JLN Stadium , Delhi ",
  "Collection Live : Meta Lives , live on astrix",
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [page,setPage] = useState(false);
  const handleClick = () => {
    setPage(true)
  }  

    // set interval for events autoplay slider
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

  return <div>
    {page && <Collections/>}
  {!page &&
   <div className="bg-black relative">
      <div className="pl-4 pb-4 ml-8 font-lexend flex absolute bottom-0 z-1">
          <p className="text-white bg-gray-600 py-2 px-8 rounded-l-3xl cursor-pointer">Events</p>
          <p onClick={handleClick} className="text-white bg-gray-800 py-2 px-8 rounded-r-3xl cursor-pointer">Collections</p>
      </div>
     {/* LOGO */}
     <div className="flex items-center p-8 text-yellow-500">
        <img className="bg-yellow-500" src={logoImg} alt="logo" />
        <h1 className="text-xl font-bold">Astrix</h1>
      </div>

      {/* BACKGROUND HEADING */}
      <div className="w-[400px] h-[708px] px-4 mx-4">
        <p className="uppercase text-[#FFFFFF] text-opacity-20 text-9xl leading-32 break-words font-lexend">
          Astrix Events
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
              <div className="text-white font-lexend w-[47%] pl-20 absolute right-[2%] top-[-25%]">
                <p className="text-2xl font-bold py-8 w-[60%]">
                  Explore Your First Event
                </p>
                <h1 className="text-6xl font-bold leading-[2.75rem] mt-12 mb-4">
                  Event Name
                </h1>
                <p className="py-4">Live in Astrix</p>
                <p className="text-[1rem] w-[80%]">
                  Join us for an evening of enchantment at the Grand Gala
                  Extravaganza, where the stars align to create unforgettable
                  memories.
                </p>
                <h1 className="text-3xl my-12">Artist Lineup</h1>
                <div className="flex relative justify-between gap-10">
                   <img className="h-[150px] w-[150px] rounded-lg" src={artist1} alt="artist1" /> 
                   <img className="h-[200px] w-[200px] absolute -top-[15%] left-[25%] rounded-lg" src={artist2} alt="artist2" /> 
                   <img className="h-[150px] w-[150px] rounded-lg" src={artist3} alt="artist3" /> 
                </div>
            
                <div className="flex justify-between m-4 pt-10 ">
                  <img src={qrImg} className="h-[90px]" alt="qr-image" />
                  <button className="bg-[#FFCA5F] text-black p-2 font-medium rounded-3xl mt-10">
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
  }
  </div>
}
export default Events;