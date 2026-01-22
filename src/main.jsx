import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'; // 추가


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 추가 */}
    <App/>
    </BrowserRouter> {/* 추가 */}
  </React.StrictMode>
);