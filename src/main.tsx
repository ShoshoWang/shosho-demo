import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import App from './App'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
