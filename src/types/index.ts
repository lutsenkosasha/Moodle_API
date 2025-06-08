export interface Course {
  id: number;
  fullname: string;
  shortname: string;
  summary?: string;
  description?: string;
}

export interface User {
  id: number;
  username: string;
  fullname: string;
}