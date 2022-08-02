import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// new link to GraphQL server at /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// instantiale Apollo Client instance and create connection to API endpoint
const client = new ApolloClient({
  // connecting to API endpoint
  link: httpLink,
  // new cache object
  cache: new InMemoryCache(),
});

function App() {
  return (
    // enables entire application to interact with Apollo Client instance
    <ApolloProvider client={client}>
      <div className='flex-column justify-flex-start min-100-vh'>
        <Header />
        <div className='container'>
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
