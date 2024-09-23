// import './App.css';
// import { Outlet } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Navbar from './components/Navbar';

// // Initialize Apollo Client
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql', // changed to our GraphQL server URL
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Navbar />
//       <div className="flex-column justify-center align-center min-100-vh bg-primary">
//         <Outlet />
//       </div>
//     </ApolloProvider>
//   );
// }

// export default App;


// App.jsx
import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // GraphQL server URL
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Outlet />
      </div>
    </ApolloProvider>
  );
}

export default App;
