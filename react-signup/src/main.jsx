import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate 
} from "react-router-dom";

import SignupPage from './pages/sign-up.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "page",
        element: (<AuthenticatedRoute>
          <div className='text-white'>Testing</div>
        </AuthenticatedRoute>),
      },
      {
        path: "403",
        element: (<div className='text-white'>Unauthorized!</div>),
      }
    ],
  },
]);

function AuthenticatedRoute({children}){
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/403" />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
