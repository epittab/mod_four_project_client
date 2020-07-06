import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import LoginContainer from './Login/LoginContainer'
import Home from './Home/Home'
import UserInfoContainer from './Account/UserInfoContainer'
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
            < UserInfoContainer />
          </Route>
          <Route exact path='/search'>
            < Search />
          </Route>
          <Route exact path='/research'>
            < Research />
          </Route>
          <Route path='/'>
            <div>
                404: Page not found 
            </div>
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
