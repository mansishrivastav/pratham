import React from 'react'
import { FaHome } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const FirstBody = () => {
    const images = [ "https://prathamonline.com/images/clat/1.jpg", 
        "https://prathamonline.com/images/clat/2.jpg",
        "https://prathamonline.com/images/clat/3.jpg",
        "https://prathamonline.com/images/clat/4.jpg",
        "https://prathamonline.com/images/clat/5.jpg",
        "https://prathamonline.com/images/clat/6.jpg",
        // "https://prathamonline.com/updatedbanners/law.png",
        // "https://prathamonline.com/images/law-mob-view/law-new-mobile.png"
    ]
  return (
    <section className='bg-[#081153] mt-20 py-6 text-center'>
      <Swiper modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 10000 }}
        loop={true}
      >
        {images.map((src, i)=>(
            <SwiperSlide  key={i}>
                <img 
        src={src}
        className='mx-auto px-10 pt-16 max-w-full' 
        alt={`Slide ${i + 1}`} />
            </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-left px-20 items-center gap-2 text-white/50 mt-4'>
        <span className='text-white inline-flex items-center'>
          <FaHome className="mr-1" />
        </span> 
        / <span className='text-white'>Pages</span> / 
        <span className='text-white'>Common Law Admission Test</span>
      </div>
    </section>
  )
}

export default FirstBody;
