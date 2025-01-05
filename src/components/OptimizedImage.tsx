import React from 'react';
import ImageContainer from './ImageContainer';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  objectPosition?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-video',
  objectPosition = 'center',
  ...props
}) => {
  if (!src) return null;

  return (
    <div className={`overflow-hidden ${aspectRatio} ${className}`}>
      <ImageContainer
        src={src}
        alt={alt || ''}
        className="w-full h-full"
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;