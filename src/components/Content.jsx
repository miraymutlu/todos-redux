import React from 'react'
import List from './contentComponents/List'

function Content() {
  return (
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <List />
      </section>
  )
}

export default Content