import React from 'react';
import ReactDOM from 'react-dom/client';
import Appbar from "./components/appbar/Appbar"
import WorkRoutes from './routes/WorkRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <Appbar/><br />
    </>
    <WorkRoutes />
  </React.StrictMode>
);


