import React from 'react';
// import { NavLink, } from 'react-router-dom';
import {Tabs, Tab, Box, } from 'grommet';
import { AccountConsumer, } from '../providers/AccountProvider';
import Account from './Account';
import AccountForm from './AccountForm';

const Navbar = () => (
  <AccountConsumer>
    { value => (
<Tabs>
  <Tab title="Home">
    <Box pad="large" align="center">
      Home
    </Box>
  </Tab>
  <Tab title="Profile">
    <Box pad="large" align="center">
    <Account />
  </Box>
  </Tab>
  <Tab title="Your Info">
    <Box pad="large" align="center">
    <AccountForm />
  </Box>
  </Tab>
</Tabs>
    )}
</AccountConsumer>
)
export default Navbar
      // <Menu label="Home">
      // </Menu>
      // <Menu label="username">
      // </Menu>
