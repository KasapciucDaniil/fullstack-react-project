import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Loader } from './Components/Loader/Loader';

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
      <div className="App">
        <AuthContext.Provider value={{
          token, login, logout, userId, isAuthenticated
        }}>
          <Router>
          {routes}
          </Router>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
