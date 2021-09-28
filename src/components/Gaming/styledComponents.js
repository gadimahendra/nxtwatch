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
`
export const SideAndSearchCon = styled.div`
  display: flex;
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:${props => props.justify}
  align-items:${props => props.alignItems}
  height: 100vh;
  margin: 0;
`
export const TrendingHeadingCon = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.radius};
  height: ${props => props.height};
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin-top: ${props => props.marginT};
  margin-left: ${props => props.marginL};
`

export const Image = styled.img`
  width: 80%;
  height: 60vh;
  margin: 0;
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: roboto;
  font-weight: 600;
  font-size: 30px;
  align-self: center;
  margin: 0;
  margin-left: 15px;
`
export const Description = styled.p`
  color: ${props => props.color};
  font-family: roboto;
  font-weight: 500;
  font-size: 20px;
  align-self: center;
`
export const DisplayVideos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 20px;
`
