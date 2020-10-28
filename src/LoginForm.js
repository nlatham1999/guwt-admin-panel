import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './LoginForm.css'

class LoginForm extends React.Component {

    state={
        username: '',
        password: ''
    }

    render(){
        return (
        <form>
            <h1>Enter your username and password</h1>
            <label for='username'>Username: </label>
            <input
                type='text'
                name='username'
            />
            <br></br>
            <label for='password'>Password: </label>
            <input 
                type='password'
                name='password'
            />
            <br></br>
            <button type='button' onClick={this.login}>Login</button>
            <br></br>
            <button type='button' onClick={this.forgotUsernameOrPassword}>Forgot username or password?</button>
            <br></br>
            <button type='button' onClick={this.createNewAccount}>Create Account</button>
        </form>);
    }

    login = () => {

    }

    forgotUsernameOrPassword = () => {

    }

    createNewAccount = () => {

    }

}

export default LoginForm;