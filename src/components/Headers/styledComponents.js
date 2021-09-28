import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
 
  }
`

export const LogoutArea = styled.div`
  display: flex;
`
export const Image = styled.img`
  height: 35px;
  margin-left: 25px;
`
export const LogoutButton = styled.button`
  background-color: inherit;
  border: 2px solid ${props => props.border};
  font-family: roboto;
  color: ${props => props.color};
  font-size: 20px;
  font-weight: 500;
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
  border-radius: 3px;
`
export const NavContainer = styled.nav``

export const PopupContainer = styled.div`
  background-color: #383838;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Alert = styled.p`
  color: #ffffff;
  font-family: roboto;
  font-size: 19px;
  font-weight: 500;
`

export const CustomButton = styled.button`
  color: #ffffff;
  background-color: ${props => props.bgColor};
  border-width: ${props => props.borderWidth};
  width: 120px;
  height: 30px;
  border: ${props => props.border};
  border-radius: 3px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`
export const ButtonIcon = styled.button`
  background-color: inherit;
  cursor: pointer;
  border-width: 0;
`
