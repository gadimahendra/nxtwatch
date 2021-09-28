import {Component} from 'react'
import {MdCancel} from 'react-icons/md'

import {
  BannerSection,
  BannerImageLogo,
  LogoContainer,
  ButtonIcon,
  Description,
  GetButton,
} from './styledComponents'

class Banner extends Component {
  state = {view: false}

  changeView = () => {
    this.setState({view: true})
  }

  render() {
    const {view} = this.state
    return (
      <BannerSection display={view ? 'none' : 'flex'} data-testid="banner">
        <LogoContainer>
          <BannerImageLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <ButtonIcon
            type="button"
            onClick={this.changeView}
            data-testid="close"
          >
            <MdCancel size={25} />
          </ButtonIcon>
        </LogoContainer>
        <Description>
          Buy NxT Watch Premium prepaid plans with <br /> UPI
        </Description>
        <GetButton>GET IT NOW</GetButton>
      </BannerSection>
    )
  }
}

export default Banner
