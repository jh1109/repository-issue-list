import { useParams } from 'react-router-dom';
import { useIssue } from '../store/issueContext';
import Issue from '../interfaces/issue';
import { styled } from 'styled-components';
import {
  getDayToDate,
  getMonthToDate,
  getYearToDate,
} from '../utils/getFilterDate';

const IssueDetailPage = () => {
  const params = useParams();
  const issueNumber = +params.issueNumber!;

  const { issues } = useIssue();

  const issue = issues.find((issue: Issue) => issue.number === issueNumber);
  if (issue === undefined) {
    throw new Error();
  } else {
    const date = issue.created_at;
    const year = getYearToDate(date);
    const month = getMonthToDate(date);
    const day = getDayToDate(date);
    const newDate = `${year} ${month} ${day}`;

    return (
      <DetailContainerStayle>
        <div className="imgIssueInfo">
          <img src={issue.user.avatar_url} alt="작성자의 프로필 이미지" />
          <div>
            <div className="titleArea">
              <span>{`#${issue.number}`}</span>
              <p>{issue.title}</p>
            </div>
            <div className="subArea">
              <span>{`작성자: ${issue.user.login}, `}</span>
              <span>{`작성일: ${newDate}, `}</span>
              <span>{`코멘트: ${issue.comments}`}</span>
            </div>
          </div>
        </div>
        <p>{issue.body}</p>
      </DetailContainerStayle>
    );
  }
};

const DetailContainerStayle = styled.div`
  padding: 0.4rem;
  background: white;

  .imgIssueInfo {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.6rem;
    margin-bottom: 1rem;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 10px;
    }
  }

  .titleArea {
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  .subArea {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    gap: 0.4rem;
  }
`;

export default IssueDetailPage;
