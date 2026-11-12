export interface IStudio {
  _id: string;
  title: string;
  category: string;
  hourlyRate: number;
  securityDeposit: number;
  location: string;
  maxCapacity: number;
  imageUrl: string;
  overview: string;
  amenities: string[];
}