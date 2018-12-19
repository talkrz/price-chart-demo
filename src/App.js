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
          className={`App-header-button App-header-button-${theme}`}
          onClick={() => setView('basic')}
        >
          basic
        </button>
        <button
          className={`App-header-button App-header-button-${theme}`}
          onClick={() => setView('advanced')}
        >
          advanced
        </button>
      </header>
      <div className="App-content">
        {view === 'advanced' && <ChartView parentSetTheme={setTheme} />}
        {view === 'basic' && <ChartBasicView parentSetTheme={setTheme} />}
      </div>
    </div>
  );
}
