import React from 'react';

export default function Navigation({ view, setView, setTheme, setMenuOn }) {
  return (
    <>
      <button
        className={`App-header-button ${view === 'basic' ? 'active' : ''}`}
        onClick={() => {setView('basic'); setTheme('light'); setMenuOn(false); }}
      >
        basic (React)
      </button>
      <button
        className={`App-header-button ${view === 'advanced' ? 'active' : ''}`}
        onClick={() => { setView('advanced'); setMenuOn(false); }}
      >
        interactive (React)
      </button>
      <a href="pureJs.html" target="_blank">basic (plain JavaScript)</a>
    </>
  )
}
