export interface CarImage {
    base: string;
    overlay?: string;
  }
  
  export interface CarDetails {
    title: string;
    transmission: string;
    seats: number;
    rating: number;
    pricePerDay: number;
  }
  
  export interface CarCardData {
    images: CarImage[];
    details: CarDetails;
  }