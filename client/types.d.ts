export interface LocationTypes {
  lat: number | null;
  lng: number | null;
  address: string;
}

export interface CustomErrorTypes {
  showError: boolean;
  errorMessage: string | null;
}