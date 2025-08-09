export interface ArtPeriod {
  id: string;
  name: string;
  period: string;
  description: string;
  characteristics: string[];
  image: string;
  startYear: number;
  endYear: number;
}

export interface Artist {
  id: string;
  name: string;
  period: string;
  nationality: string;
  lifespan: string;
  description: string;
  styles: string[];
  masterworks: string[];
  portrait: string;
  birthYear: number;
  deathYear?: number;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  artistId: string;
  year: string;
  medium: string;
  description: string;
  image: string;
  dimensions?: string;
  location?: string;
  periodId: string;
}

export interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'period' | 'artist' | 'artwork' | 'technique';
}

export interface UserProgress {
  userId: string;
  completedQuizzes: string[];
  favoriteArtworks: string[];
  favoriteArtists: string[];
  studyTime: number;
  level: number;
  achievements: string[];
}