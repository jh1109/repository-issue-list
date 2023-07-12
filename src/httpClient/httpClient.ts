export class HttpClient {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  fetch(RESTAPIURL: string, options: object) {
    return window.fetch(this.baseURL + RESTAPIURL, options);
  }
}
