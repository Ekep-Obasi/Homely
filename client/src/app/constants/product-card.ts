interface productProps {
  id: string;
  image: string;
  address: string;
  location: string;
  availability: "AVAILABLE" | "NOT AVAILABLE";
  rooms: number;
  bathrooms: number;
  cost: string;
  liked?: boolean;
  area: number;
}

export const products: productProps[] = [
  {
    id: "80da54f16700c7baf7170b4c5cb1abfc",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "Pharmacy Shalom",
    location: "Biyemassi, Yde",
    availability: "AVAILABLE",
    rooms: 3,
    bathrooms: 2,
    cost: "85,000 CFA",
    liked: false,
    area: 155,
  },
  {
    id: "593b54d2d82f4ec3bf963ed2cda806f7",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    address: "Rue 157 Amasogo",
    location: "Biyemassi, Yde",
    availability: "NOT AVAILABLE",
    rooms: 2,
    bathrooms: 1,
    cost: "55,000 CFA",
    liked: false,
    area: 124.5,
  },
  {
    id: "d2e1cee42143d5e9edea8ae30f7aaa7b",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    address: "Rue 149 Somatel",
    location: "Biyemassi, Yde",
    availability: "NOT AVAILABLE",
    rooms: 3,
    bathrooms: 3,
    cost: "100,000 CFA",
    liked: false,
    area: 187.6,
  },
  {
    id: "11148ad87927cc5f969c7eecbed06a41",
    image:
      "https://plus.unsplash.com/premium_photo-1675537856917-d662fd1ddc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    address: "Rue 749 Jean Barga",
    location: "Biyemassi, Yde",
    availability: "AVAILABLE",
    rooms: 5,
    bathrooms: 3,
    cost: "135,000 CFA",
    liked: false,
    area: 199.5,
  },
  {
    id: "",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    address: "Rue Avenue 126",
    location: "Biyemassi, Yde",
    availability: "NOT AVAILABLE",
    rooms: 4,
    bathrooms: 3,
    cost: "110,000 CFA",
    liked: false,
    area: 163.4,
  },
  {
    id: "3a0fa6d82ca2eba9fd36351c0a1220a6",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    address: "Carrefour Biyemassi",
    location: "Biyemassi, Yde",
    availability: "AVAILABLE",
    rooms: 2,
    bathrooms: 3,
    cost: "75,000 CFA",
    liked: false,
    area: 82.3,
  },
];

export const quality = ["Minimalist", "Classic", "Modern"];

export const sortQueries = ["Price", "Location", "Verified"];
