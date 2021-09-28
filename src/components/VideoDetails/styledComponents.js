import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  background-size: cover;
`
export const SideBarCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin-top: 30px;
  height: 90vh;
`
export const ParallelToSideBarCon = styled.div`
  display: flex;
  width: 80%;
  margin-top: 30px;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  padding: 10px;
`
export const SideAndSearchCon = styled.div`
  display: flex;
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Title = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  font-size: ${props => props.size};
  font-weight: 500;
  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
`
export const Names = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 13px;
  font-weight: 500;
  align-self: flex-start;

  margin-top: 5px;
  margin-bottom: 0;
`
export const Views = styled.div`
  display: flex;
  margin-top: 0;
  align-self: flex-start;
`
export const ContainerLike = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LikeDislikeButton = styled.button`
  background-color: inherit;
  border-width: 0;
  color: ${props => props.colorW};
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
`
export const SpanEle = styled.span`
  margin-left: 5px;
  margin-top: 0px;
`

export const ProfileImg = styled.img`
  height: 30px;
`
export const ProfileCon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-left: 10px;
`
export const Subscribers = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  margin: 0;
  font-weight: 500;
  font-size: 17px;
`
export const Image = styled.img`
  width: 80%;
  height: 60vh;
`
