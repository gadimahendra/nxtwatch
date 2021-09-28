import styled from 'styled-components'

export const BannerSection = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  background-size: cover;
  padding: 20px;
`

export const BannerImageLogo = styled.img`
  height: 40px;
`
export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonIcon = styled.button`
  background-color: inherit;
  cursor: pointer;
  border-width: 0;
`
export const Description = styled.p`
  color: #424242;
  font-family: roboto;
  font-size: 20px;
  font-weight: 500;
`
export const GetButton = styled.button`
  background-color: inherit;
  cursor: pointer;
  border: 2px solid #424242;
  color: #424242;
  font-family: roboto;
  font-size: 20px;
  border-radius: 2px;
  width: 125px;
`
