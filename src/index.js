import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import TimelineApp from './components/timelineApp/TimelineApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimelineApp />
  </React.StrictMode>
);