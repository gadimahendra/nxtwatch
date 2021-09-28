import styled from 'styled-components'

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-top: 20px;
  margin-right: 20px;
  width: 255px;
  margin-bottom: 20px;
`
export const ThumbnailImg = styled.img`
  width: 250px;
  height: 150px;
`
export const ProfileDescription = styled.div`
  display: flex;
  margin-top: 20px;
`
export const ProfileImg = styled.img`
  height: 30px;
`
export const Description = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  font-weight: 500;
  font-size: 14px;
  margin-top: 0;
  margin-left: 10px;
`
export const Names = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 13px;
  font-weight: 500;
  align-self: flex-start;
  margin-left: 35px;
  margin-top: 5px;
  margin-bottom: 0;
`
export const Views = styled.div`
  display: flex;
  margin-top: 0;
  align-self: flex-start;
`
