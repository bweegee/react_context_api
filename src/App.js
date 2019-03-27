import React from 'react';
import Navbar from './components/Navbar';
import AccountProfile from './components/AccountProfile';
import { Switch, Route } from 'react-router-dom';
import { Grommet, } from 'grommet';

const App = () => (
  <Grommet>
    <Navbar />
      <Switch>
        <Route
          exact
          path='/'
          render={ () => <div></div> }
        />
        <Route
          exact
          path='/account/profile'
          render={ () => <AccountProfile /> }
        />
      </Switch>
  </Grommet>
)

export default App;
