import { styled } from 'styled-components';
import { useIssue } from '../store/issueContext';
import IssueList from '../components/issueList/IssueList';

const HomePage = () => {
  const { issues, isLoading, repository } = useIssue();

  let content = <PStyle>issues가 없습니다!</PStyle>;
  if (isLoading) {
    content = (
      <PStyle>
        {`${repository.owner}의 ${repository.repo}`} repository issues 불러오는
        중...
      </PStyle>
    );
  }
  if (issues.length > 0) {
    content = <IssueList issues={issues} />;
  }
  return <>{content}</>;
};

const PStyle = styled.p`
  font-size: 1.4rem;
  padding-left: 0.6rem;
`;
export default HomePage;
