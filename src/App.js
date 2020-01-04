import React from 'react';
import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import UserDetail from './UserDetail/UserDetail';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
function App() {
  // const {token} = sessionStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path='/dashboard/:page'>
            <Dashboard />
          </Route>
          <Route path='/userDetail/:id'>
            <UserDetail />
          </Route>
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
