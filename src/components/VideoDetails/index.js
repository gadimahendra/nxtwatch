import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Headers from '../Headers'
import SideBar from '../SideBar'

import ConfigurationContext from '../../context/ConfigurationContext'

import {
  HomeContainer,
  SideBarCon,
  ParallelToSideBarCon,
  SideAndSearchCon,
  ProductsLoaderContainer,
  Title,
  Views,
  Names,
  ContainerLike,
  LikeDislikeButton,
  ProfileImg,
  ProfileCon,
  Subscribers,
  Image,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    initialWatchVideos: '',
    colorTheme: false,
    colorThemeDisLike: false,
    saveButtonStatus: false,
  }

  componentDidMount() {
    this.getDetails()
  }

  getUpdatedDetails = videos => {
    const updatedVideos = {
      id: videos.id,
      title: videos.title,
      viewCount: videos.view_count,
      publishedAt: videos.published_at,
      profileImageUrl: videos.channel.profile_image_url,
      name: videos.channel.name,
      thumbnailUrl: videos.thumbnail_url,
      videoUrl: videos.video_url,
      subscribers: videos.channel.subscriber_count,
      description: videos.description,
    }

    this.setState({
      initialWatchVideos: updatedVideos,
      apiStatus: apiStatusConstants.success,
    })
  }

  changeColorOfLike = () => {
    this.setState(prevState => ({
      colorTheme: !prevState.colorTheme,
    }))
    this.setState({colorThemeDisLike: false})
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      colorThemeDisLike: !prevState.colorThemeDisLike,
    }))
    this.setState({colorTheme: false})
  }

  saveButton = () => {
    this.setState(prevState => ({
      saveButtonStatus: !prevState.saveButtonStatus,
    }))
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if (response.ok === true) {
      this.getUpdatedDetails(data.video_details)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryButton = () => {
    this.getDetails()
  }

  renderOfSuccessView = () => {
    const {
      initialWatchVideos,
      colorTheme,
      colorThemeDisLike,
      saveButtonStatus,
    } = this.state
    const timeInYears = formatDistanceToNow(
      new Date(initialWatchVideos.publishedAt),
    )
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <HomeContainer
              data-testid="videoItemDetails"
              bgColor={theme ? '#0f0f0f' : '#f9f9f9'}
            >
              <Headers />
              <SideAndSearchCon>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <ParallelToSideBarCon bgColor={theme ? '#212121' : '#ebebeb'}>
                  <ReactPlayer
                    url={initialWatchVideos.videoUrl}
                    controls
                    width="100%"
                    height="60vh"
                  />
                  <Title size="20px" color={theme ? '#f9f9f9' : '#424242'}>
                    {initialWatchVideos.title}
                  </Title>
                  <ContainerLike>
                    <Views>
                      <Names>{initialWatchVideos.viewCount} </Names>
                      <Names>{timeInYears}</Names>
                    </Views>
                    <Views>
                      <LikeDislikeButton
                        onClick={this.changeColorOfLike}
                        colorW={colorTheme ? '#2563eb' : '#64748b'}
                      >
                        <BiLike size={13} margin="0px" />
                        Like
                      </LikeDislikeButton>
                      <LikeDislikeButton
                        onClick={this.onClickDislikeButton}
                        colorW={colorThemeDisLike ? '#2563eb' : '#64748b'}
                      >
                        <BiDislike size={13} margin="0px" />
                        Dislike
                      </LikeDislikeButton>
                      <LikeDislikeButton
                        onClick={this.saveButton}
                        colorW={saveButtonStatus ? '#2563eb' : '#64748b'}
                      >
                        <BiListPlus size={13} margin="0px" />
                        {saveButtonStatus ? 'Saved' : 'Save'}
                      </LikeDislikeButton>
                    </Views>
                  </ContainerLike>
                  <hr
                    style={{
                      color: '#000000',
                      backgroundColor: '',
                      height: 5,
                    }}
                  />
                  <Views>
                    <ProfileImg
                      src={initialWatchVideos.profileImageUrl}
                      alt="channel logo"
                    />
                    <ProfileCon>
                      <Subscribers color={theme ? '#cccccc' : '#212121'}>
                        {initialWatchVideos.name}
                      </Subscribers>
                      <Names>
                        {initialWatchVideos.subscribers} subscribers
                      </Names>
                    </ProfileCon>
                  </Views>
                  <Title
                    size="13px"
                    color="#475569"
                    marginLeft="40px"
                    marginTop="30px"
                  >
                    {initialWatchVideos.description}
                  </Title>
                </ParallelToSideBarCon>
              </SideAndSearchCon>
            </HomeContainer>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }

  renderOfLoadingView = () => (
    <ProductsLoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </ProductsLoaderContainer>
  )

  renderOfFailureView = () => (
    <ConfigurationContext>
      {value => {
        const {theme} = value
        return (
          <HomeContainer bgColor={theme ? '#0f0f0f' : '#f9f9f9'}>
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
                  <button type="button" onClick={this.retryButton}>
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

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderOfLoadingView()
      case apiStatusConstants.success:
        return this.renderOfSuccessView()
      case apiStatusConstants.failure:
        return this.renderOfFailureView()
      default:
        return null
    }
  }
}

export default VideoDetails
