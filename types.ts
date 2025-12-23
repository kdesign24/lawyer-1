
export interface PracticeArea {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface ResultCase {
  type: string;
  amount: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}
