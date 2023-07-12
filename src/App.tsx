import Header from './components/layout/Header';
import GlobalStyle from './GlobalStyle';
import IssueList from './components/issueList/IssueList';
import { useIssue } from './store/issueContext';

function App() {
  const { issues, isLoading } = useIssue();

  let content = <p>issues가 없습니다!</p>;
  if (isLoading) {
    content = <p>issues 불러오는 중...</p>;
  }
  if (issues.length > 0) {
    content = <IssueList issues={issues} />;
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      {content}
    </>
  );
}

export default App;
