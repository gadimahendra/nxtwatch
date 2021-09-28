import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ConfigurationContext from '../../context/ConfigurationContext'

import {
  MainContainer,
  LoginContainer,
  LogoImg,
  FormContainer,
  LabelEle,
  InputEle,
  InputAreaContainer,
  ShowPasswordCon,
  ShowPasswordContent,
  PasswordCheckInputEle,
  LoginButton,
  ErrorM,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  storeJwtToken = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitUserLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()
    console.log(data.error_msg)
    if (response.ok === true) {
      this.storeJwtToken(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg, showError: true})
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state

    return (
      <InputAreaContainer>
        <LabelEle htmlFor="username">Username</LabelEle>
        <InputEle
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          value={username}
          id="username"
        />
      </InputAreaContainer>
    )
  }

  renderPasswordInput = theme => {
    const {showPassword, password} = this.state

    return (
      <InputAreaContainer>
        <LabelEle htmlFor="password">Password</LabelEle>
        <InputEle
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          onChange={this.onChangePassword}
          value={password}
          id="password"
        />
        <ShowPasswordCon>
          <PasswordCheckInputEle
            type="checkbox"
            onClick={this.togglePassword}
            id="showPasswordInput"
          />
          <ShowPasswordContent
            color={theme ? '#f9f9f9' : '#181818'}
            htmlFor="showPasswordInput"
          >
            Show Password
          </ShowPasswordContent>
        </ShowPasswordCon>
      </InputAreaContainer>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {theme} = value
          console.log(theme)
          return (
            <MainContainer bgColor={theme ? '#313131' : '#f9f9f9'}>
              <LoginContainer bgColor={theme ? '#181818' : '#f9f9f9'}>
                <LogoImg
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.onSubmitUserLogin}>
                  {this.renderUsernameInput()}
                  {this.renderPasswordInput(theme)}
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorM>*{errorMsg}</ErrorM>}
                </FormContainer>
              </LoginContainer>
            </MainContainer>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Login
