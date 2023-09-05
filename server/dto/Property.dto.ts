export interface ICreatePropertyTypes {
  name: string;
  address: string;
  description: string;
  image_list: [string];
  meta: { rating: number; likes: number };
  reviews: any;
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  price: number;
  house_type: "Rooms" | "Studio" | "Apartememts";
  quality: "Minimalist" | "Classic" | "Modern";
  status: string;
  country: string;
  city: string;
  region: string;
  street: string;
  latitude: number;
  longitude: number;
  owner_id: string;
}

export interface IPropertyPost {
  senderId: string;
  message: string;
  likes?: number;
}

export interface IEditProperty {
  name: string;
  description: string;
  image_list: [string];
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  price: number;
  house_type: "Rooms" | "Studio" | "Apartememts";
  quality: "Minimalist" | "Classic" | "Modern";
  status: string;
}

export interface IGetPropertyQueries {
  house_type?: "Rooms" | "Studio" | "Apartememts";
  quality?: "Minimalist" | "Classic" | "Modern";
  country: string;
  city: string;
  region: string;
  street: string;
}
