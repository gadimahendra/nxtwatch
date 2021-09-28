import styled from 'styled-components'

export const WatchContainer = styled.div`
  border: 1px solid #313131;
  margin-top: 20px;
  width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
  height: 30px;
  margin-bottom: 20px;
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const InputEle = styled.input`
  background-color: inherit;
  color: #cccccc;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  flex-grow: 1;
`
export const DisplayVideos = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const Image = styled.img`
  width: 80%;
`
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
