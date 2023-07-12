import React from 'react';
import Issue from '../../interfaces/issue';
import {
  getDayToDate,
  getMonthToDate,
  getYearToDate,
} from '../../utils/getFilterDate';
import {
  CommentStyle,
  IssueAreaStyle,
  IssueStyle,
  IssueMainAreaStyle,
  IssueSubAreaStyle,
} from './issueList.style';

const IssueListItem: React.FC<{ issue: Issue }> = ({ issue }) => {
  const date = issue.date;
  const year = getYearToDate(date);
  const month = getMonthToDate(date);
  const day = getDayToDate(date);
  const newDate = `${year} ${month} ${day}`;
  return (
    <IssueStyle>
      <section>
        <IssueAreaStyle>
          <IssueMainAreaStyle>
            <span>{`#${issue.issueNumber}`}</span>
            <h3>{issue.title}</h3>
          </IssueMainAreaStyle>
          <IssueSubAreaStyle>
            <span>{`작성자: ${issue.user.login}`}</span>
            <span>{`작성일: ${newDate}`}</span>
          </IssueSubAreaStyle>
        </IssueAreaStyle>
        <CommentStyle>{`코멘트: ${issue.comments}`}</CommentStyle>
      </section>
    </IssueStyle>
  );
};

export default IssueListItem;
