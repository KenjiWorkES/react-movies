import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './layout';

import { QueryClient, QueryClientProvider } from 'react-query';

import MotionPictureContextProvider from './context/motions-context';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <MotionPictureContextProvider>
      <BrowserRouter>
        <Layout>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Layout>
      </BrowserRouter>
    </MotionPictureContextProvider>
  </QueryClientProvider>
);
