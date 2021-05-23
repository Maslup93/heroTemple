import React from 'react';
import HomePage from './views/home/HomePage';
import CharSheet from './views/character/CharSheet';
import AboutPage from './views/about/AboutPage';
import CharacterPage from './views/character/CharacterPage';
import NavBar from './layout/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (


    <Router>
      <NavBar/>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/search">
          <CharacterPage />
        </Route>
        <Route path="/moreinfo">
          <CharSheet />
        </Route>
        <Route>
          <AboutPage/>
        </Route>
      </Switch>
  </Router>
  )
}

export default App
