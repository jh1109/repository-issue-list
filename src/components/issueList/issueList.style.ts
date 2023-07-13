import { styled } from 'styled-components';

/* IssueListItem */
export const IssueStyle = styled.li`
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

export const IssueAreaStyle = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
`;

export const IssueMainAreaStyle = styled.div`
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

export const IssueSubAreaStyle = styled.div`
  font-size: 1rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CommentStyle = styled.span`
  flex-shrink: 1;
  white-space: nowrap;
`;
