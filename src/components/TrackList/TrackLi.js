import React from 'react'
import {SortableElement} from 'react-sortable-hoc'
import TrackInfo from './TrackInfo'

export default SortableElement(props => (
  <article className='dt f6 w-100 mw8 center bb b--black-05 pa2'>
    <TrackInfo className='w-25'>
      {props.name}
    </TrackInfo>
    <TrackInfo className='w-25'>
      {props.artist}
    </TrackInfo>
    <TrackInfo className='w-10'>
      <img className='w2 h2' src={props.artSrc} alt={props.albumName} />
    </TrackInfo>
  </article>
))
