import React, { useState } from 'react';
import ChartView from './examples/advanced/ChartView';
import ChartBasicView from './examples/basic/ChartBasicView';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  // pseudo-routing ;)
  const [view, setView] = useState('advanced');

  return (
    <div className={`App App-${theme}`}>
      <header className={`App-header App-header-${theme}`}>
        Price chart demo
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
          advanced (React)
        </button>
        <a href="pureJs.html" target="_blank">basic (plain JavaScript)</a>
      </header>
      <div className="App-content">
        {view === 'advanced' && <ChartView parentSetTheme={setTheme} />}
        {view === 'basic' && <ChartBasicView parentSetTheme={setTheme} />}
      </div>
    </div>
  );
}
