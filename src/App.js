import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ConfigurationContext from './context/ConfigurationContext'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'

import Trending from './components/Trending'
import SavedVideos from './components/SavedViedeos'

import GamingRoute from './components/Gaming'
import './App.css'

class App extends Component {
  state = {theme: false}

  onToggleTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  render() {
    const {theme} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          theme,
          onToggleTheme: this.onToggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" data-testid="home" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            data-testid="videoItemDetails"
            component={VideoDetails}
          />
          <ProtectedRoute
            exact
            path="/trending"
            data-testid="trending"
            component={Trending}
          />

          <ProtectedRoute
            exact
            path="/gaming"
            data-testid="gaming"
            component={GamingRoute}
          />

          <ProtectedRoute
            exact
            path="/saved-videos"
            data-testid="savedVideos"
            component={SavedVideos}
          />

          <Route component={NotFound} />
        </Switch>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
