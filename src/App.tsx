import React, { useCallback, useEffect, useState } from 'react';

import Header from './components/layout/Header';
import GlobalStyle from './GlobalStyle';
import IssueList from './components/issueList/IssueList';
import Issue from './interfaces/issue';

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssuesHandler = useCallback(
    async (owner: string, repo: string) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/issues`,
          {
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
            },
          }
        );
        if (!(response.status === 200)) {
          throw new Error('error!');
        }

        const data = await response.json();

        let loadedIssues = [];
        for (const loadedIssue of data) {
          loadedIssues.push({
            id: loadedIssue.id,
            issueNumber: loadedIssue.number,
            title: loadedIssue.title,
            user: {
              login: loadedIssue.user.login,
              avatar_url: loadedIssue.user.avatar_url,
            },
            date: new Date(loadedIssue.created_at),
            comments: loadedIssue.comments,
            content: loadedIssue.body,
          });

          setIssues(loadedIssues);
        }
      } catch (error: any) {
        alert(error.response.data.message);
      }
    },
    []
  );

  useEffect(() => {
    fetchIssuesHandler('facebook', 'react');
  }, [fetchIssuesHandler]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <IssueList issues={issues} />
    </>
  );
}

export default App;
