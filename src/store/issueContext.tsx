import React, {
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import Issue from '../interfaces/issue';
import { IssueService } from '../services/IssueService';

const IssueContext = React.createContext<{
  issues: Issue[];
  isLoading: boolean;
}>({
  issues: [],
  isLoading: false,
});

export const useIssue = () => useContext(IssueContext);

export const IssueProvider: React.FC<{
  children: ReactNode;
  issueService: IssueService;
}> = ({ issueService, children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssuesHandler = useCallback(async () => {
    setIsLoading(true);
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

        loadedIssues.sort((a: Issue, b: Issue) => {
          if (a.comments > b.comments) {
            return -1;
          }
          if (a.comments < b.comments) {
            return 1;
          }
          return 0;
        });

        setIssues(loadedIssues);
      }
    } catch (error: any) {
      alert(error.message);
    }
    setIsLoading(false);
  }, [issueService]);

  useEffect(() => {
    fetchIssuesHandler();
  }, [fetchIssuesHandler]);

  return (
    <IssueContext.Provider value={{ issues: issues, isLoading: isLoading }}>
      {children}
    </IssueContext.Provider>
  );
};
