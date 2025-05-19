import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
// import client from './apolloClient';
import App from './App'

// createRoot(document.getElementById('root')!).render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

