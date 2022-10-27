import React, { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader/Loader';
import { UserContext } from './contexts/AuthContext';
import Routes from './router/Routes';

const App = () => {
  const { loading } = useContext(UserContext);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Routes></Routes>
      <Toaster />
    </>
  );
}

export default App;

