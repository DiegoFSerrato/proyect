import React from 'react';
import { useImageLoad } from '../hooks/useImageLoad';
import LoadingSpinner from './LoadingSpinner';

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  className = '',
  children
}) => {
  const { isLoaded, error } = useImageLoad(src);

  if (error) {
    return (
      <div className={`bg-gray-100 ${className} flex items-center justify-center`}>
        <p className="text-gray-500">Error al cargar la imagen</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <LoadingSpinner />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {children}
    </div>
  );
};

export default ImageContainer;