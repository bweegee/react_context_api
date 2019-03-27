import React from 'react'
import { Box, Grid, Image, Heading, } from 'grommet';
import { AccountConsumer, } from '../providers/AccountProvider';

const Account = () => (
  <AccountConsumer>
    { value => (
      <Grid
        alignSelf="center"
        rows={['xsmall', 'small']}
        columns={['small', 'large']}
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box gridArea="header" background="brand" align="center">
          <Heading level="3">{value.username}</Heading>
        </Box>
        <Box gridArea="nav" background="light-5">
          <Image
            fit="cover"
            src={ value.avatar }
          />
        </Box>
        <Box gridArea="main" background="light-2" pad="xxsmall" justify="evenly">
          <Heading level="4">email: {value.email}</Heading>
          <Heading level="4">First Name: {value.firstName}</Heading>
          <Heading level="4">Last Name: {value.lastName}</Heading>
        </Box>
      </Grid>
    )}
  </AccountConsumer>
)

export default Account
