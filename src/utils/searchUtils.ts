import { GuestGroup, GuestSearchResult } from '../types/guest';

export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

export const searchGuest = (
  searchTerm: string,
  guestGroups: GuestGroup[]
): GuestSearchResult => {
  const normalizedSearch = normalizeText(searchTerm);
  
  const matchingGroups = guestGroups.filter((group) => {
    // Buscar en el nombre principal
    if (normalizeText(group.mainGuest).includes(normalizedSearch)) {
      return true;
    }
    
    // Buscar en el nombre de familia si existe
    if (group.familyName && normalizeText(group.familyName).includes(normalizedSearch)) {
      return true;
    }
    
    // Buscar en los miembros de la familia
    return group.familyMembers.some(
      (member) => normalizeText(member).includes(normalizedSearch)
    );
  });

  return {
    found: matchingGroups.length > 0,
    groups: matchingGroups,
    searchedName: searchTerm,
  };
};