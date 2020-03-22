import React from 'react'
import { Chooser } from '../index'
import '../../firebase.js'
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
    }
    this.responseGoogle = this.responseGoogle.bind(this)
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevState.user) {
      this.setState({
        user: this.props.user
      })
    }
  }

  responseGoogle = (response) => {
    this.props.setuser(response);
  }

  render() {
    const { user } = this.state

    return (
      <>
        {user ? 
          <>
            <p>Welcome, {user.profileObj.givenName}</p> 
            <Chooser user={user}/>
          </> : 
          <GoogleLogin
            clientId="FILL IN"
            buttonText="Log In"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        }
      </>
    )
  }
}

export default Login