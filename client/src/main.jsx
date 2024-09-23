// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import App from './App.jsx'
// import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//     children: [
//       {
//         index: true,
//         element: <SearchBooks />
//       }, {
//         path: '/saved',
//         element: <SavedBooks />
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

// revised by Chat
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

import App from './App.jsx';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

// Create a router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main application component
    errorElement: <h1 className='display-2'>Wrong page!</h1>, // Error handling for unmatched routes
    children: [
      {
        index: true, // This route will be rendered at the root path
        element: <SearchBooks /> // Default component for the root path
      },
      {
        path: '/saved',
        element: <SavedBooks /> // Component for the saved books page
      }
    ]
  }
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
