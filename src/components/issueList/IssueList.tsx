import React from 'react';
import Issue from '../../interfaces/issue';
import IssueListItem from './IssueListItem';
import { MainStyle } from './issueList.style';

const IssueList: React.FC<{ issues: Issue[] }> = props => {
  return (
    <MainStyle>
      <ul>
        {props.issues.map(issue => (
          <IssueListItem key={issue.id} issue={issue} />
        ))}
      </ul>
    </MainStyle>
  );
};

export default IssueList;
