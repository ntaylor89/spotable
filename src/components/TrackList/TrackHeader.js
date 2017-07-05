import React from 'react'
import TrackInfo from './TrackInfo'

export default (props) => (
  <TrackInfo className={props.className}>
    <strong>{props.children}</strong>
  </TrackInfo>
)
