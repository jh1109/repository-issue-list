import { HttpClient } from '../httpClient/httpClient';

export class IssueService {
  httpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch(
      'repos/facebook/react/issues?sort=comments',
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
}
