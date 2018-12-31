import React, { useState } from 'react';
import ChartViewLive from './examples/live/ChartViewLive';
import ChartViewAdvanced from './examples/advanced/ChartViewAdvanced';
import ChartBasicView from './examples/basic/ChartBasicView';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  // pseudo-routing ;)
  const [view, setView] = useState('advanced');

  return (
    <div className={`App App-${theme}`}>
      <header className={`App-header App-header-${theme}`}>
        <span className="App-header-home" href="/">Price chart demo</span>
        <div className="App-header-links">
          <button
            className={`App-header-button ${view === 'basic' ? 'active' : ''}`}
            onClick={() => {setView('basic'); setTheme('light') }}
          >
            basic (React)
          </button>
          <button
            className={`App-header-button ${view === 'advanced' ? 'active' : ''}`}
            onClick={() => setView('advanced')}
          >
            interactive (React)
          </button>
          <a href="pureJs.html" target="_blank">basic (plain JavaScript)</a>
        </div>
      </header>
      <div className="App-content">
        {view === 'live' && <ChartViewLive parentSetTheme={setTheme} />}
        {view === 'advanced' && <ChartViewAdvanced parentSetTheme={setTheme} />}
        {view === 'basic' && <ChartBasicView parentSetTheme={setTheme} />}
      </div>
    </div>
  );
}
