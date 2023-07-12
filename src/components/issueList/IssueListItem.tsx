import React from 'react';
import { styled } from 'styled-components';
import Issue from '../../interfaces/issue';
import {
  getDayToDate,
  getMonthToDate,
  getYearToDate,
} from '../../utils/getFilterDate';

const IssueListItem: React.FC<{ issue: Issue }> = ({ issue }) => {
  const date = issue.date;
  const year = getYearToDate(date);
  const month = getMonthToDate(date);
  const day = getDayToDate(date);
  const newDate = `${year} ${month} ${day}`;
  return (
    <IssueLiStyle>
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
    </IssueLiStyle>
  );
};

const IssueLiStyle = styled.li`
  background: white;
  padding: 0.6rem;

  & + & {
    border-top: 1px solid #dee2e6;
  }

  section {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.6rem;
  }
`;

const IssueAreaStyle = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
`;

const IssueMainAreaStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const IssueSubAreaStyle = styled.div`
  font-size: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CommentStyle = styled.span`
  flex-shrink: 1;
  white-space: nowrap;
`;

export default IssueListItem;
