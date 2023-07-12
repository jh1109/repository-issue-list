interface Issue {
  id: number;
  issueNumber: number;
  title: string;
  user: { login: string; avatar_url: string };
  date: object;
  comments: number;
  content: string;
}

export default Issue;
