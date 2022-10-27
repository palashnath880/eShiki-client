import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContext from './contexts/AuthContext';
import CartsContext from './contexts/CartsContext';
import CoursesContext from './contexts/CoursesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
      <CoursesContext>
        <CartsContext>
          <App />
        </CartsContext>
      </CoursesContext>
    </AuthContext>
  </React.StrictMode>
);

