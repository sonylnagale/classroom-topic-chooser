import React from 'react'
import { Button, Form, Input } from 'reactstrap'
import { Topics } from '../index'
import firebase from '../../firebase.js'
import cookie from 'react-cookies'

import './Admin.css'

class Admin extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      isAuth: cookie.load('topics')
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSignIn = () => {
    const { email, password } = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((data) => {
        this.setState({
          isAuth: true
        })
        cookie.save('topics', true, { path: '/' })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let { isAuth } = this.state

    return (
      <>
        {!isAuth && <>
          <p>Hello, Instructor. Please log in to begin</p>
          <Form className="login">
            <Input type="email" name="email" id="email" placeholder="me@me.com" value={this.state.email} onChange={this.handleChange} />
            <Input type="password" name="password" id="password" placeholder="Password (Unique to this site)" value={this.state.password} onChange={this.handleChange} />
            <Button onClick={this.handleSignIn}>Sign In</Button>
          </Form>
        </>
        }
        {isAuth && <Topics />}
      </>
    )
  }

}

export default Admin
