import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import ConfigurationContext from '../../context/ConfigurationContext'

import Videos from '../Videos'

import Headers from '../Headers'

import SideBar from '../SideBar'

import {
  WatchContainer,
  ProductsLoaderContainer,
  InputEle,
  DisplayVideos,
  Image,
  HomeContainer,
  SideAndSearchCon,
  SideBarCon,
  ParallelToSideBarCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  emptyList: 'EMPTY',
}

class Watch extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    initialWatchVideos: [],
    searchInput: '',
  }

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

  onChangeEvent = event => {
    this.setState({searchInput: event.target.value})
  }

  getApiCallDetails = async () => {
    const {searchInput} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      if (data.videos.length === 0) {
        this.setState({apiStatus: apiStatusConstants.emptyList})
      } else {
        this.getUpdatedDetails(data.videos)
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onEnterSearchInput = () => {
    this.getApiCallDetails()
  }

  retry = () => {
    this.getApiCallDetails()
  }

  renderOfLoadingView = () => (
    <ProductsLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderOfSuccessView = theme => {
    const {initialWatchVideos} = this.state
    return (
      <DisplayVideos>
        {initialWatchVideos.map(each => (
          <Videos videoItems={each} key={each.id} themeStatus={theme} />
        ))}
      </DisplayVideos>
    )
  }

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

  renderOfEmptyList = () => (
    <ConfigurationContext>
      {value => {
        const {theme} = value
        return (
          <HomeContainer bgColor={theme ? '#313131' : '#f9f9f9'}>
            <ParallelToSideBarCon bgColor={theme ? '#212121' : '#ebebeb'}>
              <ProductsLoaderContainer>
                <div>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <h1>No Search results found</h1>
                  <p>Try different key words or remove search filter</p>
                  <button onClick={this.retry} type="button">
                    Retry
                  </button>
                </div>
              </ProductsLoaderContainer>
            </ParallelToSideBarCon>
          </HomeContainer>
        )
      }}
    </ConfigurationContext>
  )

  searchButton = () => {
    this.getApiCallDetails()
  }

  renderOFApiStatus = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderOfLoadingView()
      case apiStatusConstants.success:
        return this.renderOfSuccessView(theme)
      case apiStatusConstants.failure:
        return this.renderOfFailureView()
      case apiStatusConstants.emptyList:
        return this.renderOfEmptyList()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <>
              <WatchContainer>
                <InputEle
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeEvent}
                  onKeyDown={this.onEnterSearchInput}
                  value={searchInput}
                />
                <button
                  type="button"
                  data-testid="searchButton"
                  onClick={this.searchButton}
                >
                  <BsSearch size={20} color={theme ? '#cccccc' : '#212121'} />
                </button>
              </WatchContainer>
              {this.renderOFApiStatus(theme)}
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default Watch
