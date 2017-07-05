import React, {Component} from 'react'
import {arrayMove} from 'react-sortable-hoc'
import TrackList from '../components/TrackList/TrackList'

const albumId = '2BRqfk8jL7y3egZqlc5MkU'

class SortableTrackList extends Component {
  constructor (props) {
    super(props)
    this.onSortEnd = this.onSortEnd.bind(this)
    this.state = { tracks: [] }
  }

  componentDidMount () {
    const {spotify} = this.props
    spotify.getAlbum(albumId)
           .then(({body}) => body.tracks.items.map(t => t.id))
           .then(trackIds => spotify.getTracks(trackIds))
           .then(({body: { tracks }}) => this.setState({ tracks }))
           .catch((err) => console.log(err))
  }

  onSortEnd ({oldIndex, newIndex}) {
    let {tracks} = this.state
    this.setState({
      tracks: arrayMove(tracks, oldIndex, newIndex)
    })
  }

  render () {
    if (this.state.tracks.length) {
      return (
        <TrackList
          tracks={this.state.tracks}
          onSortEnd={this.onSortEnd}
          pressDelay={100}
          helperClass='' />
      )
    } else {
      return (
        <p className='w-100 mw8 center'>Please login to continue!</p>
      )
    }
  }
}

export default SortableTrackList
