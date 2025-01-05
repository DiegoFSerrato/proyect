/**
 * Calcula el aspect ratio de una imagen
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  const ratio = width / height;
  if (ratio > 1.7) return 'aspect-video';
  if (ratio > 1.3) return 'aspect-[4/3]';
  if (ratio === 1) return 'aspect-square';
  return 'aspect-[3/4]';
};

/**
 * Optimiza una URL de imagen para diferentes tamaños
 */
export const getResponsiveImageUrl = (imageUrl: string, width: number): string => {
  if (imageUrl.startsWith('http')) {
    // Para URLs externas (como Unsplash), podemos agregar parámetros de tamaño
    return `${imageUrl}?w=${width}&q=80&auto=format`;
  }
  // Para imágenes locales, retornamos la URL original
  return imageUrl;
};

/**
 * Precarga una imagen
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};