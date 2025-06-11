import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  "events/IMG_6051.jpg",
  "events/IMG_7234.jpg",
  "events/IMG_7323.jpg",
  "events/IMG_7347.jpg",
  "events/IMG_7355.jpg",
  "events/IMG_7367.jpg",
  "events/IMG_7434.jpg",
  "events/IMG_7503.jpg",
  "events/IMG_9091.jpg",
  "events/IMG_9188.jpg",
];

export const ImageCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <Swiper
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative group">
            <img
              src={src}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={`BCCSS Event ${index + 1}`}
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Image number indicator */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-surface-black/70 backdrop-blur-sm text-text-white text-sm rounded-full border border-surface-border">
              {index + 1} / {images.length}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #00ff88 !important;
          background: rgba(26, 26, 36, 0.8) !important;
          backdrop-filter: blur(10px) !important;
          width: 48px !important;
          height: 48px !important;
          border-radius: 12px !important;
          border: 1px solid rgba(42, 42, 58, 0.5) !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(26, 26, 36, 0.95) !important;
          border-color: rgba(0, 255, 136, 0.3) !important;
          box-shadow: 0 0 20px rgba(0, 255, 136, 0.3) !important;
          transform: scale(1.05) !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: 600 !important;
        }

        .swiper-pagination {
          bottom: 16px !important;
        }

        .swiper-pagination-bullet {
          background: rgba(161, 161, 170, 0.5) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 12px !important;
          border: 1px solid rgba(42, 42, 58, 0.5) !important;
          transition: all 0.3s ease !important;
        }

        .swiper-pagination-bullet-active {
          background: #00ff88 !important;
          border-color: #00ff88 !important;
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5) !important;
          transform: scale(1.2) !important;
        }

        .swiper-pagination-bullet:hover {
          background: #00d4ff !important;
          border-color: #00d4ff !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};