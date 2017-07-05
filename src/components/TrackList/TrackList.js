import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import TrackLi from './TrackLi'
import TrackHeader from './TrackHeader'

export default SortableContainer(({tracks}) => (
  <div className='pt4'>
    <article className='dt f6 w-100 mw8 center bb b--black-05 pa2'>
      <TrackHeader className='w-25'>Name</TrackHeader>
      <TrackHeader className='w-25'>Artist</TrackHeader>
      <TrackHeader className='w-10'>Album</TrackHeader>
    </article>

    {tracks.map((track, index) => (
      <TrackLi
        key={track.id}
        index={index}
        name={track.name}
        artist={track.artists[0].name}
        albumName={track.album.name}
        artSrc={track.album.images[track.album.images.length - 1].url}
      />
    ))}
  </div>
))
