import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GlobalStyle from './GlobalStyle';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
