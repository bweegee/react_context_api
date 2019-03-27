import React from 'react';
import Navbar from './components/Navbar';
import AccountProfile from './components/AccountProfile';
import { Switch, Route } from 'react-router-dom';
import { Grommet, Box, } from 'grommet';

const App = () => (
  <Grommet>
    <Navbar />
    <Box>
      <Switch>
        <Route
          exact
          path='/'
          render={ () => <div>Home</div> }
        />
        <Route
          exact
          path='/account/profile'
          render={ () => <AccountProfile /> }
        />
      </Switch>
    </Box>
  </Grommet>
)

export default App;
