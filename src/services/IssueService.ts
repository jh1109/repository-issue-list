import { HttpClient } from '../httpClient/httpClient';
import Issue from '../interfaces/issue';

export class IssueService {
  httpClient;
  owner: string;
  repo: string;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.owner = '';
    this.repo = '';
  }

  async getIssues(owner: string, repo: string, options: string) {
    this.owner = owner;
    this.repo = repo;
    const noOptions = options.trim().length === 0;
    const response = await this.httpClient.fetch(
      `repos/${owner}/${repo}/issues${noOptions ? '' : `?${options}`}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/vnd.github+json',
        },
      }
    );

    //Todo: Error 처리(error 화면 구현)

    return response.json();
  }

  filterIssue(data: any[]) {
    let loadedIssues: Issue[] = [];
    for (const loadedIssue of data) {
      loadedIssues.push({
        id: loadedIssue.id,
        number: loadedIssue.number,
        title: loadedIssue.title,
        user: {
          login: loadedIssue.user.login,
          avatar_url: loadedIssue.user.avatar_url,
        },
        created_at: new Date(loadedIssue.created_at),
        comments: loadedIssue.comments,
        body: loadedIssue.body,
      });
    }
    return loadedIssues;
  }
}
