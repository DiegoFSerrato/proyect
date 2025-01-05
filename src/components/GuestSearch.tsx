import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { guestGroups } from '../data/guestList';
import { searchGuest } from '../utils/searchUtils';
import { GuestSearchResult } from '../types/guest';
import GuestCard from './GuestCard';

const GuestSearch = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<GuestSearchResult | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      const result = searchGuest(search, guestGroups);
      setSearchResult(result);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl text-center font-dancing mb-8 sm:mb-12">
          Encuentra tu Invitación
        </h2>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ingresa tu nombre completo"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </form>

        {searchResult && (
          <div className="space-y-6">
            {searchResult.found && searchResult.groups ? (
              <div className="space-y-6">
                {searchResult.groups.length > 1 && (
                  <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
                    Encontramos {searchResult.groups.length} posibles coincidencias para "{searchResult.searchedName}":
                  </p>
                )}
                {searchResult.groups.map((group) => (
                  <GuestCard key={group.id} group={group} />
                ))}
              </div>
            ) : (
              <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg">
                <p className="text-gray-600 text-sm sm:text-base">
                  No se encontró ninguna invitación para "{searchResult.searchedName}"
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Por favor, verifica que el nombre esté escrito correctamente
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GuestSearch;