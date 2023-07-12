import React from 'react';
import { styled } from 'styled-components';
import Issue from '../../interfaces/issue';

const IssueList: React.FC<{ issues: Issue[] }> = props => {
  return (
    <IssueListStyle>
      {props.issues.map(issue => (
        <li key={issue.id}>{issue.title}</li>
      ))}
    </IssueListStyle>
  );
};

const IssueListStyle = styled.ul`
  padding-top: 4rem;
  width: 40rem;
  background: white;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default IssueList;
