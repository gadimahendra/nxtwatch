import ConfigurationContext from '../../context/ConfigurationContext'
import Headers from '../Headers'
import SideBar from '../SideBar'

import {
  HomeContainer,
  SideAndSearchCon,
  SideBarCon,
  ParallelToSideBarCon,
  ProductsLoaderContainer,
  Image,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <ConfigurationContext>
    {value => {
      const {theme} = value
      return (
        <HomeContainer bgColor={theme ? '#313131' : '#f9f9f9'}>
          <Headers />
          <SideAndSearchCon>
            <SideBarCon>
              <SideBar />
            </SideBarCon>
            <ParallelToSideBarCon bgColor={theme ? '#212121' : '#ebebeb'}>
              <ProductsLoaderContainer>
                <Image
                  src={
                    theme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  }
                  alt="not found"
                />
              </ProductsLoaderContainer>
              <Heading color={theme ? '#cccccc' : '#212121'}>
                Page Not Found
              </Heading>
              <Description color={theme ? '#cccccc' : '#212121'}>
                We are sorry, the page you requested could not be found.{' '}
              </Description>
            </ParallelToSideBarCon>
          </SideAndSearchCon>
        </HomeContainer>
      )
    }}
  </ConfigurationContext>
)

export default NotFound
