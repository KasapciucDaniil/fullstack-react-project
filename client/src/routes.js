import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { Header } from './Components/Headers/Header'
import { Footer } from './Components/Footer/Footer';
import { UserPage } from './pages/UserPage/UserPage';
import { PortfolioPage } from './pages/PortfolioPage/PortfolioPage'
import { NotesPage } from './pages/Notes/NotesPage';

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
          <Route path="/portfolio">
            <PortfolioPage /> 
          </Route> 
          <Route path="/notes">
            <NotesPage /> 
          </Route> 
          <Redirect to="/" />
        </Switch>
        <Footer />
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