import React, {
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';
import Issue, { Repository } from '../interfaces/issue';
import { IssueService } from '../services/IssueService';

const IssueContext = React.createContext<{
  issues: Issue[];
  isLoading: boolean;
  repository: Repository;
}>({
  issues: [],
  isLoading: false,
  repository: { owner: '', repo: '' },
});

export const useIssue = () => useContext(IssueContext);

export const IssueProvider: React.FC<{
  children: ReactNode;
  issueService: IssueService;
}> = ({ issueService, children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [repository, setRepository] = useState<Repository>({
    owner: '',
    repo: '',
  });

  const fetchIssuesHandler = useCallback(async () => {
    setIsLoading(true);
    setRepository({ owner: 'facebook', repo: 'react' });

    try {
      const data = await issueService.getIssues(
        'facebook',
        'react',
        'sort=comments'
      );
      const filteredIssues: Issue[] = issueService.filterIssue(data);
      setIssues(filteredIssues);
    } catch (error: any) {
      alert(error.message);
    }
    setIsLoading(false);
  }, [issueService]);

  useEffect(() => {
    fetchIssuesHandler();
  }, [fetchIssuesHandler]);

  return (
    <IssueContext.Provider
      value={{ issues: issues, isLoading: isLoading, repository }}
    >
      {children}
    </IssueContext.Provider>
  );
};
