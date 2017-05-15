import React from 'react'

const styles = {
  td: 'pv3 pr3 bb b--black-20',
  img: 'db w-100'
}

export default (props) => (
  <tr>
    <td className={styles.td}>{props.title}</td>
    <td className={styles.td}>{props.artist}</td>
    <td className={styles.td}>
      <img className={''} src={props.artSrc} alt={props.album} />
    </td>
  </tr>
)
