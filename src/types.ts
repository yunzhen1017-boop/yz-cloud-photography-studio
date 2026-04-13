export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
