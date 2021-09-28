import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ConfigurationContext from '../../context/ConfigurationContext'
import Headers from '../Headers'
import SideBar from '../SideBar'
import GamingApps from '../GamingApps'

import {
  HomeContainer,
  SideAndSearchCon,
  SideBarCon,
  ParallelToSideBarCon,
  ProductsLoaderContainer,
  Image,
  Heading,
  TrendingHeadingCon,
  DisplayVideos,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, initialWatchVideos: []}

  componentDidMount() {
    this.getApiCallDetails()
  }

  getUpdatedDetails = videos => {
    const updatedVideos = videos.map(each => ({
      id: each.id,
      title: each.title,
      viewCount: each.view_count,
      thumbnailUrl: each.thumbnail_url,
    }))
    this.setState({initialWatchVideos: updatedVideos})
    this.setState({apiStatus: apiStatusConstants.success})
  }

  getApiCallDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.getUpdatedDetails(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderOfLoadingView = () => (
    <ProductsLoaderContainer
      data-testid="loader"
      alignItems="center"
      justify="center"
    >
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderOfFailureView = () => (
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
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    }
                    alt="failure view"
                  />
                </ProductsLoaderContainer>
              </ParallelToSideBarCon>
            </SideAndSearchCon>
          </HomeContainer>
        )
      }}
    </ConfigurationContext>
  )

  renderOfSuccessView = theme => {
    const {initialWatchVideos} = this.state
    return (
      <DisplayVideos bgColor={theme ? '#181818' : '#ffffff'}>
        {initialWatchVideos.map(each => (
          <GamingApps videoItems={each} key={each.id} />
        ))}
      </DisplayVideos>
    )
  }

  renderOfUserInterface = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderOfLoadingView()
      case apiStatusConstants.success:
        return this.renderOfSuccessView(theme)
      case apiStatusConstants.failure:
        return this.renderOfFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ConfigurationContext.Consumer>
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
                    <TrendingHeadingCon marginT="20px" marginL="15px">
                      <TrendingHeadingCon
                        bgColor="#181818"
                        radius="45px"
                        height="70px"
                        width="70px"
                        padding="20px"
                      >
                        <SiYoutubegaming color="red" size={32} />
                      </TrendingHeadingCon>
                      <Heading color={theme ? '#f9f9f9' : '#424242'}>
                        Gaming
                      </Heading>
                    </TrendingHeadingCon>
                  </ProductsLoaderContainer>
                  <>{this.renderOfUserInterface(theme)}</>
                </ParallelToSideBarCon>
              </SideAndSearchCon>
            </HomeContainer>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default GamingRoute
