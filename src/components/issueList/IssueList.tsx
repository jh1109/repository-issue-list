import React from 'react';
import Issue from '../../interfaces/issue';
import IssueListItem from './IssueListItem';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const IssueList: React.FC<{ issues: Issue[] }> = props => {
  const list = props.issues.map((issue, index) => {
    const isInsertAd = index % 4 === 0 && index !== 0;

    return (
      <React.Fragment key={issue.id}>
        {isInsertAd && (
          <Link to="https://www.wanted.co.kr/">
            <AdImg
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="wanted 광고 이미지"
            />
          </Link>
        )}
        <IssueListItem key={issue.id} issue={issue} />
      </React.Fragment>
    );
  });
  return <ul>{list}</ul>;
};

const AdImg = styled.img`
  background: white;
  width: 100%;
  height: 3.9rem;
  object-fit: scale-down;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
`;
export default IssueList;
