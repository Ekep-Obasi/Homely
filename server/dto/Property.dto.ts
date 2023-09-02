export interface ICreatePropertyTypes {
  name: string;
  address: string;
  description: string;
  imageList: [string];
  coverImage: string;
  meta: {rating: number, likes: number};
  // reviews: any;
  accomodation_count: number;
  room_count: number;
  bed_count: number;
  bath_count: number;
  // location: {
    // lat: number;
    // lng: number;
  // };
  price: number;
  // category: "room" |"studio" | "apartement"| "guest house";
  status: string;
}