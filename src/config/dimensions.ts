// Configuración de dimensiones para diferentes secciones
export const DIMENSIONS = {
  // Hero section
  hero: {
    height: '100svh',  // Altura del hero
    overlay: 40        // Opacidad del overlay (0-100)
  },
  
  // Locations section
  locations: {
    aspect: {
      mobile: '16/9',    // Aspecto para móvil
      tablet: '2/1',     // Aspecto para tablet
      desktop: '16/9'    // Aspecto para desktop
    }
  },
  
  // Gallery section
  gallery: {
    aspect: {
      mobile: '4/3',     // Aspecto para móvil
      desktop: '16/9'    // Aspecto para desktop
    },
    slides: {
      mobile: 1.2,       // Slides visibles en móvil
      tablet: 2,         // Slides visibles en tablet
      desktop: 2.5       // Slides visibles en desktop
    },
    spacing: {
      mobile: 20,        // Espaciado en móvil
      tablet: 30,        // Espaciado en tablet
      desktop: 40        // Espaciado en desktop
    }
  }
} as const;