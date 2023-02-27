import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout>
);