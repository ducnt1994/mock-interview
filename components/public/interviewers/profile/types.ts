// Shared types for the interviewer detail page

export interface ExpertExperience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

export interface ExpertEducation {
  school: string;
  degree: string;
  period: string;
  isCert?: boolean;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Expert {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  price: number;
  available: boolean;
  img: string;
  industry: string;
  bio: string;
  experience: ExpertExperience[];
  education: ExpertEducation[];
}
