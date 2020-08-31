import React from 'react';

import './App.css';
import GuestBook from './components/GuestBook/GuestBook';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <GuestBook />
    </Layout>
  );
}

export default App;
