import React, {
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import Issue from '../interfaces/issue';
import { IssueService } from '../services/IssueService';

const IssueContext = React.createContext<{ issues: Issue[] }>({
  issues: [],
});

export const useIssue = () => useContext(IssueContext);

export const IssueProvider: React.FC<{
  children: ReactNode;
  issueService: IssueService;
}> = ({ issueService, children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const fetchIssuesHandler = useCallback(async () => {
    try {
      const data = await issueService.get();

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
      alert(error.message);
    }
  }, [issueService]);

  useEffect(() => {
    fetchIssuesHandler();
  }, [fetchIssuesHandler]);

  return (
    <IssueContext.Provider value={{ issues: issues }}>
      {' '}
      {children}{' '}
    </IssueContext.Provider>
  );
};
