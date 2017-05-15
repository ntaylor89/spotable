import React, { Component } from 'react'
import Header from './Header'
import AudioTracks from './AudioTracks'
import Track from './Track'

const artist = 'Brand New'
const album = 'The Devil & God Are Raging Inside Me'
const art = 'https://i.scdn.co/image/2bae00c54f9920fac27268a3e3874375ea2b496a'
const trackNames = [
  'Sowing Season (Yeah)', 'Millstone', 'Jesus Christ', 'Degausser', 'Limousine'
]
const stubs = trackNames.map(title => ({ title, artist, art, album }))
console.log(stubs)

class App extends Component {
  render () {
    return (
      <div className='relative sans-serif'>
        <Header />
        <AudioTracks>
          {stubs.map(track => (
            <Track key={track.title} title={track.title} artist={track.artist} artSrc={track.art} />
          ))}
        </AudioTracks>
      </div>
    )
  }
}

export default App
