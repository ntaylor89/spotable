import React from 'react'
import LoginButton from './LoginButton'

export default () => (
  <header className='bg-white ph6 bb b--black-10 dt w-100'>
    <div className='fl w-90 pa2'>
      <h1 className='f4 fw6 mr4 dib gray tracked'>Spotable</h1>
    </div>
    <div className='fl w-10 pa3' >
      <LoginButton />
    </div>
  </header>
)
