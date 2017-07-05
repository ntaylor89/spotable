import React from 'react'

const styles = {
  form: 'pt4 black-80 mw8 center',
  label: 'f6 b db mb2',
  input: 'input-reset ba b--black-20 pa2 mb2 db w-100'
}

export default () => (
  <form className={styles.form}>
    <div className='measure pa2'>
      <label htmlFor='search' className={styles.label}>Search</label>
      <input id='search' className={styles.input} type='text' aria-describedby='search-desc' />
      <small id='search-desc'>Search for a song to add.</small>
    </div>
  </form>
)
