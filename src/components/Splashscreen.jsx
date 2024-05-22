import { useState } from "react";
import logoImg from "../assets/Emlblem.png";
import image1 from "../assets/SplashImages/image1.png";
import image2 from "../assets/SplashImages/image2.png";
import image3 from "../assets/SplashImages/image3.png";
import image4 from "../assets/SplashImages/image4.png";
import image5 from "../assets/SplashImages/image5.png";
import image6 from "../assets/SplashImages/image6.png";
import image7 from "../assets/SplashImages/image7.png";
import image8 from "../assets/SplashImages/image8.png";
import Collections from "./Collections";

const Splashscreen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div onClick={handleClick}>
      {isOpen && <Collections/>}
      
      {!isOpen && 
      <div>
      <div className="flex items-center m-4 p-4 cursor-pointer">
        <img src={logoImg} alt="logo" />
        <h1 className="text-xl font-bold">Astrix</h1>
      </div>
      <div className="flex justify-end h-[70vh] ">
        <div className="uppercase text-5xl font-lexend font-medium flex flex-col gap-4 w-[85%] ">
          <div className="flex gap-4">
          <p>We</p>
          <img src={image1} className=" h-[74px] animate-resize" alt="splash-image1" />
          <p>organize the</p>
          </div>

          <div className="flex gap-4 h-[74px] animate-resizeLeft ">
          <p>connection</p>
          <img src={image2} alt="splash-image2" />
          </div>

          <div className="flex gap-4">
          <img src={image3}  className=" h-[74px] animate-resize" alt="splash-image3" />
          <p>between</p>
          <img src={image4} alt="splash-image4" />
          <p>music</p>
          </div>

          <div className="flex gap-4 overflow-hidden">
          <p>artist</p>
          <img src={image5} className="h-[74px] animate-resize" alt="splash-image5" />
          <p>culture</p>
          <img src={image6} alt="splash-image6" />
          </div>

          <div className="flex gap-4 overflow-hidden w-[100%]">
          <img className="h-[74px] animate-resize" src={image7} alt="splash-image7" />
          <p>art </p>
          <img src={image8} alt="splash-image8" />
          <p> collections</p>
          </div>
        </div>
      </div>
      </div>}
    </div>
  );
};

export default Splashscreen;
