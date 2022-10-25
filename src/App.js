import React from 'react';
import AuthContext from './contexts/AuthContext';
import Routes from './router/Routes';

const App = () => {
  return (
    <>
      <AuthContext>
        <Routes></Routes>
      </AuthContext>
    </>
  );
}

export default App;

