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
import { Link } from 'react-router-dom';

const IssueListItem: React.FC<{ issue: Issue }> = ({ issue }) => {
  const date = issue.created_at;
  const year = getYearToDate(date);
  const month = getMonthToDate(date);
  const day = getDayToDate(date);
  const newDate = `${year} ${month} ${day}`;
  return (
    <IssueStyle>
      <Link to={`/issues/${issue.number}`}>
        <section>
          <IssueAreaStyle>
            <IssueMainAreaStyle>
              <span>{`#${issue.number}`}</span>
              <h3>{issue.title}</h3>
            </IssueMainAreaStyle>
            <IssueSubAreaStyle>
              <span>{`작성자: ${issue.user.login}`}</span>
              <span>{`작성일: ${newDate}`}</span>
            </IssueSubAreaStyle>
          </IssueAreaStyle>
          <CommentStyle>{`코멘트: ${issue.comments}`}</CommentStyle>
        </section>
      </Link>
    </IssueStyle>
  );
};

export default IssueListItem;
