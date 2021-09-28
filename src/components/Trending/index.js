import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import ConfigurationContext from '../../context/ConfigurationContext'
import Headers from '../Headers'
import SideBar from '../SideBar'
import TrendingVideos from '../TrendingVideos'

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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, initialWatchVideos: ''}

  componentDidMount() {
    this.getApiCallDetails()
  }

  getUpdatedDetails = videos => {
    const updatedVideos = videos.map(each => ({
      id: each.id,
      title: each.title,
      viewCount: each.view_count,
      publishedAt: each.published_at,
      profileImageUrl: each.channel.profile_image_url,
      name: each.channel.name,
      thumbnailUrl: each.thumbnail_url,
    }))

    this.setState({
      initialWatchVideos: updatedVideos,
      apiStatus: apiStatusConstants.success,
    })
  }

  getApiCallDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.getUpdatedDetails(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retry = () => {
    this.getApiCallDetails()
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
                  <h1>Oops! Something Went Wrong</h1>
                  <p>We are having some trouble</p>
                  <button onClick={this.retry} type="button">
                    Retry
                  </button>
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
      <DisplayVideos bgColor={theme ? '#0f0f0f' : '#ffffff'}>
        {initialWatchVideos.map(each => (
          <TrendingVideos videoItems={each} key={each.id} />
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
      <ConfigurationContext>
        {value => {
          const {theme} = value
          return (
            <HomeContainer
              data-testid="trending"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            >
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
                        <AiFillFire color="red" size={32} />
                      </TrendingHeadingCon>
                      <Heading color={theme ? '#f9f9f9' : '#424242'}>
                        Trending
                      </Heading>
                    </TrendingHeadingCon>
                  </ProductsLoaderContainer>
                  {this.renderOfUserInterface(theme)}
                </ParallelToSideBarCon>
              </SideAndSearchCon>
            </HomeContainer>
          )
        }}
      </ConfigurationContext>
    )
  }
}

export default Trending
