import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { LOCATIONS } from '../constants/images';
import OptimizedImage from './OptimizedImage';
import SectionTitle from './SectionTitle';
import GiftMessage from './GiftMessage';

const LocationCard = ({ location }: { location: typeof LOCATIONS[0] }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9]">
      <OptimizedImage
        src={location.image}
        alt={location.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-dancing mb-2">{location.type}</h3>
      <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
        {location.name}
      </p>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">
        {location.description}
      </p>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Clock size={18} className="sm:w-5 sm:h-5" />
        <span className="text-sm sm:text-base">{location.time} hrs</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors text-sm sm:text-base"
        >
          <MapPin size={18} className="sm:w-5 sm:h-5" />
          Google Maps
        </a>
        <a
          href={location.wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          <MapPin size={18} className="sm:w-5 sm:h-5" />
          Waze
        </a>
      </div>
    </div>
  </div>
);

const Locations = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle>Ubicaciones</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {LOCATIONS.map((location, index) => (
            <LocationCard key={index} location={location} />
          ))}
        </div>
        <GiftMessage />
      </div>
    </section>
  );
};

export default Locations;