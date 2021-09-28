import Headers from '../Headers'
import SideBar from '../SideBar'
import ConfigurationContext from '../../context/ConfigurationContext'

import {
  HomeContainer,
  SideAndSearchCon,
  SideBarCon,
  ParallelToSideBarCon,
  ProductsLoaderContainer,
  Image,
} from './styledComponents'

const SavedVideos = () => (
  <ConfigurationContext>
    {value => {
      const {theme} = value
      return (
        <HomeContainer
          data-testid="savedVideos"
          bgColor={theme ? '#0f0f0f"' : '#f9f9f9'}
        >
          <Headers />
          <SideAndSearchCon>
            <SideBarCon>
              <SideBar />
            </SideBarCon>
            <ParallelToSideBarCon bgColor={theme ? '#212121' : '#ebebeb'}>
              <ProductsLoaderContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <h1>No saved videos found</h1>
                <p>You can save your videos while watching them</p>
              </ProductsLoaderContainer>
            </ParallelToSideBarCon>
          </SideAndSearchCon>
        </HomeContainer>
      )
    }}
  </ConfigurationContext>
)

export default SavedVideos
