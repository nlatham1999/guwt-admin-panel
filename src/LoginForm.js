/* global gapi */

//credit: https://github.com/anthonyjgrove/react-google-login/

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: false,
    }
    
  }

  componentDidMount() {

    const successCallback = this.onSuccess.bind(this);
    
    window.gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '240861169169-t9cdvoib0j4qjtoob8rad02vo94vetut.apps.googleusercontent.com',
      })

      // this.auth2.attachClickHandler(document.querySelector('#loginButton'), {}, this.onLoginSuccessful.bind(this))
      this.auth2.then(() => {
        console.log('on init');
        this.setState({
          isSignedIn: this.auth2.isSignedIn.get(),
        });
      });
    });    

    window.gapi.load('signin2', function() {
      // Method 3: render a sign in button
      // using this method will show Signed In if the user is already signed in
      var opts = {
        width: 200,
        height: 50,
        client_id: '240861169169-t9cdvoib0j4qjtoob8rad02vo94vetut.apps.googleusercontent.com',
        onsuccess: successCallback
      }
      
      gapi.signin2.render('loginButton', opts)
      
    })
  }

  onSuccess() {
    console.log('on success')
    this.setState({
      isSignedIn: true,
      err: null
    })
  }

  onLoginFailed(err) {
    this.setState({
      isSignedIn: false,
      error: err,
    })
  }

  getContent() {
    if (this.state.isSignedIn) {
      return <p>hello user, you're signed in </p>
    } else {
      return (
        <div>
          <p>You are not signed in. Click here to sign in.</p>
          <button id="loginButton">Login with Google</button>
        </div>
      )
    }
    
  }
  
  render() {
    return (      
      <div>
          {this.getContent()}
      </div>
    );
  }
}

export default LoginForm;