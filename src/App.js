import { React, useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Users from './components/Users';
import Profile from './components/Profile';
import Home from './components/Home';
import Login from './components/Login';
import ModalUnstyledDemo from './components/Modal';

function App() {
  const dataLog = {
    login: 'admin',
    password: 'pass12345',
  };
  const serialDataLog = JSON.stringify(dataLog);
  localStorage.setItem('logKey', serialDataLog);

  let auth;
  if (JSON.parse(localStorage.getItem('authKey')) !== null) {
    auth = JSON.parse(localStorage.getItem('authKey'));
  } else {
    localStorage.setItem('authKey', false);
  }

  const [authent, setAuthent] = useState(auth);

  return (
    <div>
      <Router>
        <div className="header">
          <Button variant="outline" color="success"><Link className="header-button" to="/"> Home </Link></Button>
          <Button variant="outline" color="success"><Link className="header-button" to="/users">Users</Link></Button>
          <Button variant="outline" color="success"><Link className="header-button" to="/profile">Profile</Link></Button>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users">
            {(authent) ? <Users /> : <Login setAuthent={setAuthent} />}
          </Route>
          <Route path="/profile">
            {(authent) ? <Profile /> : <Login setAuthent={setAuthent} />}
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/error" component={ModalUnstyledDemo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
