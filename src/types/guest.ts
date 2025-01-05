export type GuestType = 'family' | 'individual' | 'individual-plus-one';

export interface GuestGroup {
  id: string;
  type: GuestType;
  mainGuest: string;
  familyName?: string;
  familyMembers: string[];
  companionAllowed?: boolean;
  companionName?: string;
  dietaryRestrictions?: string[];
  confirmed?: boolean;
}

export interface GuestSearchResult {
  found: boolean;
  groups?: GuestGroup[];
  searchedName: string;
}