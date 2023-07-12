interface Issue {
  id: number;
  issueNumber: number;
  title: string;
  user: { login: string; avatar_url: string };
  date: Date;
  comments: number;
  content: string;
}

export default Issue;
