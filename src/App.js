import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Navbar from './Navbar'
import LoginContainer from './Login/LoginContainer'
import Home from './Home/Home'
import UserInfoContainer from './Account/UserInfoContainer'
import Search from './Search/SearchContainer'
import Research from './Research/ResearchDetailContainer'
import JobListingShowPage from './Research/JobListingShowPage';

class App extends React.Component {

  constructor() {
    super()
    this.state ={
      currentUser: null
    }
  }

  setUser = (user) => {
    this.setState({currentUser: user})
  }

  removeUser = () => {
    this.setState({currentUser: null})
  }

  componentDidMount(){
    // check if token is valid and set state 
    fetch(`http://localhost:3001/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    })
    .then(r => r.json() )
    .then(data => {
      if (data.user_id) {
        this.setState({currentUser: data})
      }
      console.log(data);
    })
  }

  render() {
  return (
    <div className="App">
      <Navbar isLogged={!!this.state.currentUser} removeUser={this.removeUser}/>
      {
        this.state.currentUser ?
        < Switch >

          <Route exact path='/' render={ () => <Home/>} />
            
          <Route exact path='/user' render={ () => <UserInfoContainer/>} />
               
          <Route exact path='/search' render={ () => <Search/>} />
        
          <Route exact path='/research' render={ () =>   < Research /> } />
         
      <Route exact path='/research/:id' render={ () =>   < JobListingShowPage /> } />
   
          <Route path='/' render={() =>      <div>
                                        404: Page not found 
                                            </div> } />
       
        </ Switch >
        // add all the components that we want to see when 
        // logged in
        :
      <LoginContainer setUser={this.setUser} />
      }
    </div>
  );
    }
}

export default App;
