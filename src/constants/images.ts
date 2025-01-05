// Definición de tipos para las imágenes
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
    name: 'Parroquia La Transfiguracion',
    image: IMAGES.CEREMONY,
    description: 'Donde uniremos nuestras vidas para siempre',
    mapsUrl: 'https://www.google.com/maps/place/Parroquia+La+Transfiguraci%C3%B3n/@13.68018,-89.2256131,15z/data=!4m15!1m8!3m7!1s0x8f6331f1ccc33241:0x79cea5b321d88e55!2sParroquia+La+Transfiguraci%C3%B3n!8m2!3d13.68018!4d-89.2256131!10e5!16s%2Fg%2F11q1vp0ndx!3m5!1s0x8f6331f1ccc33241:0x79cea5b321d88e55!8m2!3d13.68018!4d-89.2256131!16s%2Fg%2F11q1vp0ndx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    wazeUrl: 'https://www.waze.com/en/live-map/directions/parroquia-la-transfiguracion-pje.-triunfal-reparto-los-heroes,-san-salvador?place=w.177471625.1774519640.433169',
    time: '15:00'
  },
  {
    type: 'Recepción',
    name: 'Casa del Arbol | Boqueron',
    image: IMAGES.RECEPTION,
    description: 'Con una vista espectacular de la ciudad',
    mapsUrl: 'https://www.google.com/maps/place/Casa+del+%C3%81rbol+%7C+Boquer%C3%B3n/@13.721012,-89.2736466,17z/data=!3m1!4b1!4m6!3m5!1s0x8f632fcf8088d7db:0x95fbe46c743a7ad!8m2!3d13.721012!4d-89.2736466!16s%2Fg%2F11tsq34_lg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    wazeUrl: 'https://www.waze.com/es/live-map/directions/sv/la-libertad/santa-tecla/casa-del-arbol-or-boqueron?to=place.ChIJ29eIgM8vY48RradDx0a-Xwk',
    time: '17:00'
  }
];
