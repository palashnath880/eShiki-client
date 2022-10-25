import React from 'react';
import { Toaster } from 'react-hot-toast';
import AuthContext from './contexts/AuthContext';
import Routes from './router/Routes';

const App = () => {
  return (
    <>
      <AuthContext>
        <Routes></Routes>
        <Toaster />
      </AuthContext>
    </>
  );
}

export default App;

