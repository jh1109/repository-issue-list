import React from 'react';
import Issue from '../../interfaces/issue';
import IssueListItem from './IssueListItem';

const IssueList: React.FC<{ issues: Issue[] }> = props => {
  return (
    <ul>
      {props.issues.map(issue => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </ul>
  );
};

export default IssueList;
