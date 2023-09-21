export type listingQuality = "Minimal" | "Classic" | "Modern";
export type listingTypes = "Room" | "Studio" | "Apartement";

export interface Listing {
  id: string
  name: string;
  address: string;
  description: string;
  image_list: string[];
  meta: { rating: number; likes: number };
  reviews: any;
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  price: number;
  house_type: listingQuality;
  quality: listingQuality;
  status: string;
  country: string;
  city: string;
  region: string;
  street: string;
  latitude: number;
  longitude: number;
  owner_id: string;
  availability: string;
}

export interface EditListing {};