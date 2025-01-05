import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { GALLERY_PHOTOS } from '../config/images';
import { DIMENSIONS } from '../config/dimensions';
import OptimizedImage from './OptimizedImage';
import SectionTitle from './SectionTitle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

const PhotoCarousel = () => {
  const { gallery } = DIMENSIONS;
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle>Nuestra Historia</SectionTitle>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={gallery.slides.mobile}
          spaceBetween={gallery.spacing.mobile}
          breakpoints={{
            480: {
              slidesPerView: gallery.slides.mobile,
              spaceBetween: gallery.spacing.mobile,
            },
            640: {
              slidesPerView: gallery.slides.tablet,
              spaceBetween: gallery.spacing.tablet,
            },
            1024: {
              slidesPerView: gallery.slides.desktop,
              spaceBetween: gallery.spacing.desktop,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="!pb-12"
        >
          {GALLERY_PHOTOS.map((photo, index) => (
            <SwiperSlide key={index}>
              <figure className={`relative rounded-lg overflow-hidden aspect-[${gallery.aspect.mobile}] sm:aspect-[${gallery.aspect.desktop}]`}>
                <OptimizedImage
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
                {photo.description && (
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 sm:p-4 backdrop-blur-sm">
                    <p className="text-sm sm:text-base text-center font-cormorant">
                      {photo.description}
                    </p>
                  </figcaption>
                )}
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PhotoCarousel;