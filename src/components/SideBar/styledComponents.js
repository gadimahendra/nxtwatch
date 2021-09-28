import styled from 'styled-components'

export const LinkContainer = styled.li`
  display: flex;
  flex-direction: ${props => props.direction};
  margin-left: ${props => props.leftMargin};
  margin-top: ${props => props.topMargin};
  width: ${props => props.width};
  background-color: inherit;
  border-width: 0;
`
export const Links = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
  margin-top: 2px;
  margin-left: 20px;
  cursor: pointer;
`
export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`
export const ContactUs = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  font-size: ${props => props.size};
  font-weight: 500;
`

export const LogoImage = styled.img`
  height: 35px;
  margin-right: 15px;
`

export const ButtonLinks = styled.button`
  background-color: inherit;
  cursor: pointer;
  border-width: 0;
`
