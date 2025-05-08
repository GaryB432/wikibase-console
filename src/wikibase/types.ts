/* eslint-disable @typescript-eslint/member-ordering */
// Main interface for person information

export interface PersonInfo {
  // Basic information
  id: string; // Wikidata entity ID (e.g., "Q937" for Einstein)
  name: string;
  birthYear: number;
  deathYear?: number | null; // Optional, may be null for living people

  // Demographic information
  gender?: string; // P21: sex or gender
  nationality?: string[]; // P27: country of citizenship
  placeOfBirth?: string; // P19: place of birth
  placeOfDeath?: string; // P20: place of death

  // Career and education
  occupations: string[]; // P106: occupation
  schools: string[]; // P69: educated at
  employers?: string[]; // P108: employer
  awards?: string[]; // P166: award received

  // Works and contributions
  notableWorks?: string[]; // P800: notable work
  fieldOfWork?: string[]; // P101: field of work

  // External identifiers
  wikipediaTitle?: string | undefined; // Title of the Wikipedia article
  image?: string; // P18: image URL if available

  // Extended information
  description?: string; // Short description from Wikidata
  aliases?: string[]; // Alternative names

  // Family relationships
  parents?: string[]; // P22/P25: father/mother or parent
  children?: string[]; // P40: child
  spouses?: Array<{
    // P26: spouse
    name: string;
    from?: string; // Marriage date
    to?: string; // Divorce/death date if applicable
  }>;

  // Fetch metadata
  fetchDate: Date; // When the information was retrieved
  sources: string[]; // Sources of information (e.g., "wikidata", "wikipedia")
}
