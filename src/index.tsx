import ReactDOM from 'react-dom/client';
import App from './App';
import { HttpClient } from './httpClient/httpClient';
import { IssueProvider } from './store/issueContext';
import { IssueService } from './services/IssueService';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpClient = new HttpClient('https://api.github.com');
const issueService = new IssueService(httpClient);

root.render(
  <IssueProvider issueService={issueService}>
    <App />
  </IssueProvider>
);
