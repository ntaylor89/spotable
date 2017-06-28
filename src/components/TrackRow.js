import React from 'react'
import {SortableElement} from 'react-sortable-hoc'

const styles = {
  td: 'pv3 pr3 bb b--black-20',
  img: 'db w-100'
}

export default SortableElement((props) => (
  <tr>
    <td className={styles.td}>{props.title}</td>
    <td className={styles.td}>{props.artist}</td>
    <td className={styles.td}>
      <img className={''} src={props.artSrc} alt={props.album} />
    </td>
  </tr>
))
