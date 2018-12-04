import React, { useState } from 'react';
import ChartView from './ChartView';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App App-${theme}`}>
      <header className={`App-header App-header-${theme}`}>
        Price chart demo
      </header>
      <div className="App-content">
        <ChartView parentSetTheme={setTheme} />
      </div>
    </div>
  );
}
