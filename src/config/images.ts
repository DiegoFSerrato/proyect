// Tipos de imagen
export interface ImageAsset {
  src: string;
  alt: string;
  description?: string;
}

// Rutas de las imágenes principales
export const IMAGES = {
  HERO: '/images/hero.jpeg',
  CEREMONY: '/images/ceremony.jpg',
  RECEPTION: '/images/reception.jpg',
} as const;

// Información de ubicaciones
export const LOCATIONS = [
  {
    type: 'Ceremonia',
    name: 'Parroquia la Transfiguracion',
    image: IMAGES.CEREMONY,
    description: 'Donde uniremos nuestras vidas para siempre',
    mapsUrl: 'https://www.google.com/maps/place/Parroquia+La+Transfiguraci%C3%B3n/@13.68018,-89.2256131,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMzCsOzrkrbZ247o3ODQlRknySLlgYTAH_PZJLH!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMzCsOzrkrbZ247o3ODQlRknySLlgYTAH_PZJLH%3Dw203-h114-k-no!7i4608!8i2592!4m7!3m6!1s0x8f6331f1ccc33241:0x79cea5b321d88e55!8m2!3d13.68018!4d-89.2256131!10e5!16s%2Fg%2F11q1vp0ndx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    wazeUrl: 'https://waze.com/ul/example1',
    time: '15:00'
  },
  {
    type: 'Recepción',
    name: 'Casa del Arbol El Boqueron',
    image: IMAGES.RECEPTION,
    description: 'Con una linda vista de la ciudad',
    mapsUrl: 'https://maps.app.goo.gl/example2',
    wazeUrl: 'https://waze.com/ul/example2',
    time: '17:00'
  }
];

// Fotos para el carrusel - Usa imágenes locales
export const GALLERY_PHOTOS: ImageAsset[] = [
  {
    src: '/images/gallery/photo1.jpeg',
    alt: 'Momento especial 1',
    description: ''
  },
  {
    src: '/images/gallery/photo2.jpeg',
    alt: 'Momento especial 2',
    description: ''
  },
  {
    src: '/images/gallery/photo3.jpeg',
    alt: 'Momento especial 3',
    description: ''
  },
  {
    src: '/images/gallery/photo4.jpeg',
    alt: 'Momento especial 4',
    description: ''
  },
  {
    src: '/images/gallery/photo5.jpeg',
    alt: 'Momento especial 5',
    description: ''
  },
  {
    src: '/images/gallery/photo6.jpeg',
    alt: 'Momento especial 1',
    description: ''
  },
  {
    src: '/images/gallery/photo7.jpeg',
    alt: 'Momento especial 2',
    description: ''
  },
  {
    src: '/images/gallery/photo8.jpeg',
    alt: 'Momento especial 3',
    description: ''
  },
  {
    src: '/images/gallery/photo9.jpeg',
    alt: 'Momento especial 4',
    description: ''
  },
  {
    src: '/images/gallery/photo10.jpeg',
    alt: 'Momento especial 5',
    description: ''
  },
  {
    src: '/images/gallery/photo11.jpeg',
    alt: 'Momento especial 4',
    description: ''
  },
  {
    src: '/images/gallery/photo12.jpeg',
    alt: 'Momento especial 5',
    description: ''
  }
];