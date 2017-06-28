import React from 'react'
//import Spotify from '../services/Spotify'
const styles = {
  form: 'pt4 black-80 mw8 center',
  label: 'f6 b db mb2',
  input: 'input-reset ba b--black-20 pa2 mb2 db w-100',
  searchDesc: ''
}

export default () => (
  <form className={styles.form}>
    <div className='measure'>
      <label htmlFor='search' className={styles.label}>Search</label>
      <input id='search' className={styles.input} type='text' aria-describedby='search-desc' />
      <small id='search-desc' className={styles.searchDesc}>Search for a song to add.</small>
    </div>
  </form>
)
