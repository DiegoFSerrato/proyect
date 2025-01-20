import React from 'react';
import { Parallax } from 'react-parallax';
import { IMAGES } from '../config/images';
import { DIMENSIONS } from '../config/dimensions';

const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage={IMAGES.HERO}
      strength={200}
      className="min-h-screen"
      contentClassName="min-h-screen"
      bgImageStyle={{
        objectFit: 'cover',
        objectPosition: 'center',
        height: '120%', // Añade espacio extra para el efecto parallax
        width: '100%'
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black/40 px-4">
        <div className="text-center text-white">
        <h1 className="font-dancing text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 tracking-wider">
            Rosa 🤍 Efrain
        </h1>

          <p className="font-cormorant text-lg sm:text-xl md:text-2xl">
            Celebremos nuestro amor
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;