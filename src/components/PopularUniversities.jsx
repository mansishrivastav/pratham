import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const PopularUniversities = () => {
  const images = [
    "https://prathamonline.com/images/popularcourses/iimindore.png",
    "https://prathamonline.com/images/popularcourses/clat.png",
    "https://prathamonline.com/images/popularcourses/du.png",
    "https://prathamonline.com/images/popularcourses/simc.png",
    "https://prathamonline.com/images/popularcourses/iim-rhotak.png",
    "https://prathamonline.com/images/popularcourses/ip.png",
    "https://prathamonline.com/images/popularcourses/nmimsnpat.png",
  ];

  return (
    <div className="mt-16 w-full max-w-7xl mx-auto px-6">
      <h2 className="text-[#081153] text-2xl font-bold">Popular Universities / Entrances</h2>
      <div className="w-48 h-1 bg-yellow-500 my-4"></div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
      
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },  
          768: { slidesPerView: 2 },  
          1024: { slidesPerView: 3 }, 
        }}
        className="my-8"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <img src={src} alt={`University ${i + 1}`} className="w-40 h-40 object-contain mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularUniversities;
