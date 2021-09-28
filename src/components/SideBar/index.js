import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ConfigurationContext from '../../context/ConfigurationContext'

import {
  LinkContainer,
  Links,
  BottomContainer,
  ContactUs,
  LogoImage,
} from './styledComponents'

import './index.css'

const SideBar = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {theme} = value
      return (
        <>
          <nav direction="column">
            <ul>
              <Link to="/" className="lineDecoration">
                <LinkContainer direction="row" leftMargin="20px">
                  <AiFillHome color={theme ? '#909090' : '#616e7c'} size={22} />
                  <Links color={theme ? '#cccccc' : '#616e7c'}>Home</Links>
                </LinkContainer>
              </Link>
              <Link to="/trending" className="lineDecoration">
                <LinkContainer direction="row" leftMargin="20px">
                  <AiFillFire color={theme ? '#909090' : '#616e7c'} size={22} />
                  <Links color={theme ? '#cccccc' : '#616e7c'}>Trending</Links>
                </LinkContainer>
              </Link>

              <Link to="/gaming" className="lineDecoration">
                <LinkContainer direction="row" leftMargin="20px">
                  <SiYoutubegaming
                    color={theme ? '#909090' : '#616e7c'}
                    size={22}
                  />
                  <Links color={theme ? '#cccccc' : '#616e7c'}>Gaming</Links>
                </LinkContainer>
              </Link>

              <Link to="/saved-videos">
                <LinkContainer direction="row" leftMargin="20px">
                  <BiListPlus color={theme ? '#909090' : '#616e7c'} size={22} />
                  <Links color={theme ? '#cccccc' : '#616e7c'}>
                    Saved Videos
                  </Links>
                </LinkContainer>
              </Link>
            </ul>
          </nav>
          <BottomContainer>
            <ContactUs size="20px" color={theme ? '#f9f9f9' : '#424242'}>
              Contact Us
            </ContactUs>
            <div>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <ContactUs size="18px" color={theme ? '#f9f9f9' : '#424242'}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUs>
          </BottomContainer>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default SideBar
