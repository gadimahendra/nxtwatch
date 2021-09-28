import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh} from 'react-icons/bs'
import ConfigurationContext from '../../context/ConfigurationContext'

import {
  HeaderContainer,
  LogoutArea,
  Image,
  LogoutButton,
  NavContainer,
  PopupContainer,
  Alert,
  CustomButton,
  ButtonIcon,
} from './styledComponents'

const Headers = props => {
  const logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {theme, onToggleTheme} = value

        const onChangeTheme = () => {
          onToggleTheme()
        }

        return (
          <NavContainer>
            <HeaderContainer>
              <Link to="/">
                <Image
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <LogoutArea>
                <ButtonIcon
                  type="button"
                  onClick={onChangeTheme}
                  data-testid="theme"
                >
                  <BsBrightnessHigh
                    size={30}
                    color={theme ? '#f9f9f9' : '#0f0f0f'}
                  />
                </ButtonIcon>

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      color={theme ? '#f9f9f9' : '#3b82f6'}
                      border={theme ? '#f9f9f9' : '#3b82f6'}
                    >
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopupContainer>
                      <Alert>Are you sure, you want to logout</Alert>
                      <LogoutArea>
                        <CustomButton
                          bgColor="inherit"
                          border="1px solid #ffffff"
                          onClick={() => close()}
                          type="button"
                        >
                          Cancel
                        </CustomButton>
                        <CustomButton
                          bgColor="#0070c1"
                          type="button"
                          borderWidth="0"
                          onClick={logoutButton}
                        >
                          Confirm
                        </CustomButton>
                      </LogoutArea>
                    </PopupContainer>
                  )}
                </Popup>
              </LogoutArea>
            </HeaderContainer>
          </NavContainer>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default withRouter(Headers)
