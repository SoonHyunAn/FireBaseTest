import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Check from './pages/Check';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Check /> },
      { path: 'check', element: <Check /> },
      // { path: 'videos/:keyword', element: <Videos /> },
      // { path: 'videos/watch/:videoId', element: <VideoDetail /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root); // 확인용 로그

if (!root) {
  throw new Error("Root element not found. Make sure you have a <div id='root'></div> in your HTML file.");
}

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
