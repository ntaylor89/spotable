import React from 'react'

export default (props) => (
  <div className={`dtc v-mid ${props.className}`}>
    {props.children}
  </div>
)
