import React from 'react';

import './App.css';

import Navbar from './Navbar'
import LoginContainer from './LoginContainer'
import Test from './Test'

function App() {
  let token = localStorage.getItem('token')
  return (
    <div className="App">
      <Navbar />
      {
        token ?
        < Test />

        // add all the components that we want to see when 
        // logged in
        
        
        :
      <LoginContainer />
      }
    </div>
  );
}

export default App;
