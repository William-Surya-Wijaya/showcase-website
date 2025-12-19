export interface ArtistProfile {
  name: string;
  tagline: string;
  bio: string;
  location?: string;
  socials: Array<{ label: string; href: string }>;
}
