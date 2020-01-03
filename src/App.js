import React from 'react';
import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import UserDetail from './UserDetail/UserDetail';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route exact path='/userDetail'>
          <UserDetail />
        </Route>
      </Switch>
    </Router>  
    </div>
  );
}

export default App;
