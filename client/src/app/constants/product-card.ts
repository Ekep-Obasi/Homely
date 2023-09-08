interface productProps {
  id: string;
  image: string[];
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
    image: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600573472556-e636c2acda88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1676232715371-1fa6a4b8f4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
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
    image: [
      "https://plus.unsplash.com/premium_photo-1676637000073-5829b51b85ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    ],
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
    image: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1598714805247-5dd440d87124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    ],
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
    image: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1678172259039-ecdde7744c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://plus.unsplash.com/premium_photo-1675537856917-d662fd1ddc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    ],
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
    image: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    ],
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
    image: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ],
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
