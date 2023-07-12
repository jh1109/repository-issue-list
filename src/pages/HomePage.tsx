import { styled } from 'styled-components';
import Header from '../components/layout/Header';
import { useIssue } from '../store/issueContext';
import IssueList from '../components/issueList/IssueList';

const HomePage = () => {
  const { issues, isLoading } = useIssue();

  let content = <PStyle>issues가 없습니다!</PStyle>;
  if (isLoading) {
    content = <PStyle>issues 불러오는 중...</PStyle>;
  }
  if (issues.length > 0) {
    content = <IssueList issues={issues} />;
  }
  return (
    <>
      <Header />
      {content}
    </>
  );
};

const PStyle = styled.p`
  padding-top: 4rem;
  width: 40rem;
  height: 100vh;
  background: white;
  margin: auto;
  font-size: 1.4rem;
  padding-left: 0.6rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default HomePage;