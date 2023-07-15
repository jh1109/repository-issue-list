interface Issue {
  id: number;
  number: number;
  title: string;
  user: { login: string; avatar_url: string };
  created_at: Date;
  comments: number;
  body: string;
}

export interface Repository {
  owner: string;
  repo: string;
}

export default Issue;
