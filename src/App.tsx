import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './GlobalStyle';
import IssueDetailPage from './pages/IssueDetailPage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/issues', element: <IssueDetailPage /> },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
