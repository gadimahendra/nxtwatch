import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  background-size: cover;
`
export const SideAndSearchCon = styled.div`
  display: flex;
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
