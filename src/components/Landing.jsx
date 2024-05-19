import { useEffect, useState } from 'react';
import logoImg from '../assets/Emlblem.png';
import image1 from '../assets/collection/image1.png';
import image2 from '../assets/collection/image2.png';
import image3 from '../assets/collection/image3.png';
import image4 from '../assets/collection/image4.png';
import asterix from '../assets/asterix.png'
const slides = [image1,image2,image3,image4]

const content = [
    'Event : Oasis Bus tour , JLN Stadium , Delhi ',
    <img src={asterix} alt="asterix" />,
    'Collection Live : Meta Lives , live on astrix'
]

const Landing = () => {
   const [currentIndex,setCurrentIndex] = useState(0); 

   useEffect(() => {
    const interval = setInterval(() => {
       setCurrentIndex(prevIndex => (prevIndex+1) % slides.length) 
    }, 2000);
    return () => clearInterval(interval)
},[])
   
   return <div className='bg-black relative'>
   {/* LOGO */}
   <div className='flex items-center p-8 text-yellow-500'>
        <img className='bg-yellow-500' src={logoImg} alt="logo" />
        <h1 className='text-xl font-bold'>Astrix</h1>
    </div>

    {/* BACKGROUND HEADING */}
    <div className='w-[400px] h-[708px] p-4 m-4'>
        <p className='uppercase text-[#FFFFFF] text-opacity-20 text-9xl leading-32 break-words font-lexend'>Astrix collectible</p>
    </div>
    {/* AUTOPLAY SLIDER */}
        <div className='flex absolute top-[20%] left-[15%] gap-8 w-[50%] overflow-hidden transition-transform'>
            {slides.map((src,index) => 
             <img style={{transform: `translateX(-${currentIndex * 90}%)`,opacity:`${index == currentIndex ? '1' : '0.5' }`}}
             key= {index}
             src={src}
             alt={`Slide ${index}`}
             />
            )}
        </div>
        <div className='bg-[#B9A0FF] font-kronaOne flex items-center p-2 text-2xl gap-2 rotate-90 fixed top-[45%] left-[40%] w-[100vh] overflow-hidden transition-transform ease duration-700'>
            {content.map((item,index) => 
              <p key={index} className='flex-shrink-0' style={{transform: `translateX(-${currentIndex * 100}%)`}}>{item}</p>
            )}
        </div>
   </div>
}

export default Landing;