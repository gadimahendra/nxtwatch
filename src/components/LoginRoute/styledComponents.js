import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 60vh;
  }
`

export const LogoImg = styled.img`
  height: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const LabelEle = styled.label`
  color: #cbd5e1;
  font-family: Roboto;
  font-size: 12px;
`
export const InputEle = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  color: #cbd5e1;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  color: #475569;
  font-family: roboto;
`
export const InputAreaContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const ShowPasswordCon = styled.div`
  padding: 2px;
`
export const ShowPasswordContent = styled.label`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 15px;
  margin-bottom: 10px;
  margin: 0;
  font-weight: 500;
`
export const PasswordCheckInputEle = styled.input`
  border: 1px solid #cbd5e1;
  background-color: transparent;
  color: #cbd5e1;
  border-radius: 2px;
  height: 10px;
  outline: none;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: roboto;
  border-radius: 10px;
  cursor: pointer;
  border-width: 0;
  height: 35px;
  margin-bottom: 20px;
  margin-bottom: 0;
`
export const ErrorM = styled.p`
  color: #ff0000;
  font-family: Roboto;
  font-size: 12px;
  margin: 0;
`
