import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ConfigurationContext from '../../context/ConfigurationContext'

import {TrendingContainer, Image, Heading, Company} from './styledComponents'

const TrendingVideos = props => {
  const {videoItems} = props
  const {id, name, thumbnailUrl, title, viewCount, publishedAt} = videoItems
  const timeInYears = formatDistanceToNow(new Date(publishedAt))

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`/videos/${id}`} className="lineDecoration">
            <TrendingContainer
              direction="row"
              bgColor={theme ? '#313131' : '#ebebeb'}
            >
              <Image src={thumbnailUrl} alt="video thumbnail" />
              <TrendingContainer direction="column">
                <Heading color={theme ? '#ebebeb' : '#181818'}>{title}</Heading>
                <Company>{name}</Company>
                <TrendingContainer
                  direction="row"
                  selfAlign="flex-start"
                  margin="0"
                >
                  <Company>{viewCount} views</Company>
                  <Company marginL="20px">{timeInYears} ago</Company>
                </TrendingContainer>
              </TrendingContainer>
            </TrendingContainer>
          </Link>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default TrendingVideos
