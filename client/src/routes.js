import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Header } from './Components/Header'
import { UserPage } from './pages/UserPage/UserPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
       <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage /> 
          </Route>  
          <Route path="/about">
            <AboutPage /> 
          </Route>  
          <Route path="/user">
            <UserPage /> 
          </Route>  
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }

  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage /> 
      </Route>  
      <Route path="/register" >
        <RegisterPage /> 
      </Route>  
      <Redirect to="/auth" />
    </Switch>
  )
}