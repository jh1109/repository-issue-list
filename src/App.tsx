import Header from './components/layout/Header';
import GlobalStyle from './GlobalStyle';
import IssueList from './components/issueList/IssueList';
import { useIssue } from './store/issueContext';

function App() {
  const { issues } = useIssue();
  return (
    <>
      <GlobalStyle />
      <Header />
      <IssueList issues={issues} />
    </>
  );
}

export default App;
