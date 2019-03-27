import React from 'react'

const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    username: 'caca',
    email: 'mayaWeinerHertz@cozzabudts.com',
    firstName: 'Mike',
    lastName: 'Hunt',
    avatar: 'https://orig00.deviantart.net/e50d/f/2017/362/1/0/__i_m_so_mad____by_mellowkun-dby614m.gif',
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider
