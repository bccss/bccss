import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "events/IMG_7323.jpg",
  "events/IMG_7347.jpg",
  "events/IMG_7434.jpg",
  "events/IMG_7503.jpg",
  "events/IMG_9091.jpg"
];

export const ImageCarousel = () => {
  return (
    <div className="w-full md:w-4/5 lg:w-3/4 mx-auto relative">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="aspect-[16/9]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={src}
              className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.3);
          padding: 2rem 1.5rem;
          border-radius: 9999px;
          transform: scale(0.7);
          transition: background-color 0.3s;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};