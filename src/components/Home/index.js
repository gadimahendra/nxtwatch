import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import Headers from '../Headers'
import SideBar from '../SideBar'
import Banner from '../Banner'
import Watch from '../Watch'

import {
  HomeContainer,
  SideAndSearchCon,
  SideBarCon,
  ParallelToSideBarCon,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <HomeContainer
              data-testid="home"
              bgColor={theme ? '#181818' : '#f9f9f9'}
            >
              <Headers />
              <SideAndSearchCon>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <ParallelToSideBarCon bgColor={theme ? '#212121' : '#ebebeb'}>
                  <Banner />
                  <Watch />
                </ParallelToSideBarCon>
              </SideAndSearchCon>
            </HomeContainer>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Home
