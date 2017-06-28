import React, {Component} from 'react'
import Header from './components/Header'
import SearchField from './components/SearchField'

import SortableTrackList from './containers/SortableTrackList'
import SpotifyApi from './services/SpotifyApi'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { spotify: SpotifyApi }
  }

  render () {
    return (
      <div className='relative sans-serif'>
        <Header />
        <SearchField />
        <SortableTrackList spotify={this.state.spotify} />
      </div>
    )
  }
}

export default App
