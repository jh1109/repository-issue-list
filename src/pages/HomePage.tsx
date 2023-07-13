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
      <main>{content}</main>
    </>
  );
};

const PStyle = styled.p`
  font-size: 1.4rem;
  padding-left: 0.6rem;
`;
export default HomePage;
