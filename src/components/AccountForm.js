import React from 'react';
import {Box, Form, FormField, Button} from 'grommet';
import { AccountConsumer, } from '../providers/AccountProvider';

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    email: this.props.email,
    firstName:this.props.firstName,
    lastName:this.props.lastName,
    avatar:this.props.avatar,
  };

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit = e => {
    e.preventDefault();
    const acct = {...this.state }
    this.props.updateAccount(acct);
  };

  render() {
    const {username, email, firstName, lastName, avatar} = this.state;
    return (
      <Box direction="column" padding="small" align="center">
        <Form onSubmit={this.handleSubmit}>
          <FormField
            name="username"
            label="username"
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
          />
        </Form>
      </Box>
    );
  }
}

const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
      <AccountForm
        { ...props }
        username={value.username}
        email={value.email}
        firstName={value.firstName}
        lastName={value.lastName}
        avatar={value.avatar}
      />
    )}
  </AccountConsumer>
)

export default ConnectedAccountForm;
