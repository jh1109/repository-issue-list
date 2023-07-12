import React from 'react';
import Issue from '../../interfaces/issue';
import IssueListItem from './IssueListItem';
import { IssueListStyle } from './issueList.style';

const IssueList: React.FC<{ issues: Issue[] }> = props => {
  return (
    <IssueListStyle>
      {props.issues.map(issue => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </IssueListStyle>
  );
};

export default IssueList;
