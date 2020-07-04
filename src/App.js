import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import LoginContainer from './Login/LoginContainer'
import Home from './Home/Home'
import Account from './Account/UserAccount'
import Search from './Search/SearchContainer'
import Research from './Research/ResearchDetailContainer'

function App() {
  let token = localStorage.getItem('token')
  return (
    <div className="App">
      <Navbar />
      {
        token ?
        < Switch >
          <Route exact path='/'>
            < Home />
          </Route>
          <Route exact path='/user'>
            < Account />
          </Route>
          <Route exact path='/search'>
            < Search />
          </Route>
          <Route exact path='/research'>
            < Research />
          </Route>
        </ Switch >
        // add all the components that we want to see when 
        // logged in
        :
      <LoginContainer />
      }
    </div>
  );
}

export default App;
