import React from 'react';
import {Box, Form, FormField, Button} from 'grommet';
import { AccountConsumer, } from '../providers/AccountProvider';

class AccountForm extends React.Component {
  state = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: '',
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const {username, email, firstName, lastName, avatar} = this.state;
    return (
      <Box direction="column" padding="small" align="center">
        <Form>
          <FormField
            name="username"
            label="Username"
            value={username}
            onChange={this.handleChange}
          />
          <FormField
            label="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <FormField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <FormField
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <FormField
            label="Image url"
            name="avatar"
            value={avatar}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            primary
            label="Submit"
            onSubmit={this.handleSubmit}
          />
        </Form>
      </Box>
    );
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm
          {...props}
          username={value.username}
          firstName={value.firstName}
          lastName={value.lastName}
          avatar={value.avatar}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

export default ConnectedAccountForm;
