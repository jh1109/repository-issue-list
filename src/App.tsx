import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './GlobalStyle';
import IssueDetailPage from './pages/IssueDetailPage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/issues', element: <IssueDetailPage /> },
    ],
  },
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
