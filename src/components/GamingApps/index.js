import {Link} from 'react-router-dom'
import ConfigurationContext from '../../context/ConfigurationContext'

import {TrendingContainer, Image, Heading, Company} from './styledComponents'

const GamingApps = props => {
  const {videoItems} = props
  const {id, thumbnailUrl, title, viewCount} = videoItems

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <Link to={`/videos/${id}`} className="lineDecoration">
            <TrendingContainer
              direction="column"
              bgColor={theme ? '#313131' : '#ebebeb'}
            >
              <Image src={thumbnailUrl} alt={id} />
              <TrendingContainer direction="column">
                <Heading color={theme ? '#ebebeb' : '#181818'}>{title}</Heading>
                <TrendingContainer
                  direction="row"
                  selfAlign="flex-start"
                  margin="0"
                >
                  <Company>{viewCount} views</Company>
                  <Company>{title}</Company>
                </TrendingContainer>
              </TrendingContainer>
            </TrendingContainer>
          </Link>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default GamingApps
