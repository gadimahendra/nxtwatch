import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoContainer,
  ThumbnailImg,
  ProfileDescription,
  ProfileImg,
  Description,
  Names,
  Views,
} from './styledComponents'
import './index.css'

const Videos = props => {
  const {videoItems, themeStatus} = props
  const {
    id,
    name,
    thumbnailUrl,
    title,
    viewCount,
    publishedAt,
    profileImageUrl,
  } = videoItems
  const timeInYears = formatDistanceToNow(new Date(publishedAt))
  return (
    <Link to={`/videos/${id}`} className="lineDecoration">
      <VideoContainer>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <ProfileDescription marginTop="20px">
          <ProfileImg src={profileImageUrl} alt="channel logo" />
          <Description color={themeStatus ? '#cccccc' : '#212121'}>
            {title}
          </Description>
        </ProfileDescription>
        <Names>{name}</Names>
        <Views>
          <Names>{viewCount}</Names>
          <Names>.{timeInYears}</Names>
        </Views>
      </VideoContainer>
    </Link>
  )
}

export default Videos
