import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './layout';

import MotionPictureContextProvider from './context/motions-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MotionPictureContextProvider>
    <BrowserRouter>
      <Layout>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Layout>
    </BrowserRouter>
  </MotionPictureContextProvider>
);
