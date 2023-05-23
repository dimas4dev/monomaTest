import React, { useState } from 'react';

import { BrowserRouter, useRoutes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const AppRoutes = () => {
    const routes = useRoutes([
      { path: '/', element: <Home /> },

    ]);

    return routes;
  }

  return (
    <div>
      {isLoggedIn ? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;