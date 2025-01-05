import React from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxBackgroundProps {
  image: string;
  strength?: number;
  children: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  image,
  strength = 200,
  children,
  className = '',
  overlayOpacity = 40
}) => {
  return (
    <Parallax
      blur={0}
      bgImage={image}
      strength={strength}
      className={className}
      contentClassName="h-full"
      bgImageStyle={{
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    >
      <div className={`flex items-center justify-center h-full bg-black/${overlayOpacity}`}>
        {children}
      </div>
    </Parallax>
  );
};

export default ParallaxBackground;