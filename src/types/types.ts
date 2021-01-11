export interface Weather {
  city: string | null;
  country: string | null;
  description: string | null;
  humidity: number | null;
  icon: string | null;
  temperature: number | null;
  windSpeed: number | null;
}

export interface Error {
  errorState: boolean;
  errorCity: string;
}
