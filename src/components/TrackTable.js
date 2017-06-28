import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import TrackRow from './TrackRow'

const styles = {
  table: 'f6 w-100 mw8 center',
  th: 'fw6 bb b--black-20 tl pb3 pr3 bg-white',
  tbody: '1h-copy'
}

export default SortableContainer(props => (
  <div className='pa4'>
    <div className='overflow-auto'>
      <table className={styles.table} cellSpacing='0'>
        <thead>
          <tr>
            <th className={styles.th}>Track Name</th>
            <th className={styles.th}>Artist</th>
            <th className={styles.th}>Album</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {props.tracks.map((track, index) => (
            <TrackRow
              key={track.id}
              title={track.name}
              index={index}
              artist={track.artists[0].name}
              artSrc={track.album.images[track.album.images.length - 1].url} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
))
