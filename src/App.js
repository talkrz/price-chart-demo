import React, { useState } from 'react';
import Navigation from './Navigation';
import ChartViewAdvanced from './examples/advanced/ChartViewAdvanced';
import ChartBasicView from './examples/basic/ChartBasicView';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [menuOn, setMenuOn] = useState(false);
  const toggleMenu = () => { menuOn ? setMenuOn(false) : setMenuOn(true); }

  // pseudo-routing ;)
  const [view, setView] = useState('advanced');

  return (
    <div className={`App App-${theme}`}>
      <header className={`App-header App-header-${theme}`}>
        <span className="App-header-home" href="/">Price chart demo</span>
        <div className="App-header-menu-toggle">
          <button
            className={`App-header-button ${menuOn ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            menu
          </button>
        </div>
        <div className="App-header-links">
          <Navigation view={view} setView={setView} setTheme={setTheme} setMenuOn={setMenuOn} />
        </div>
        {menuOn && <div className={`App-header-menu App-header-menu-${theme}`}>
          <Navigation view={view} setView={setView} setTheme={setTheme} setMenuOn={setMenuOn} />
        </div>}
      </header>
      <div className="App-content">
        {view === 'advanced' && <ChartViewAdvanced parentSetTheme={setTheme} />}
        {view === 'basic' && <ChartBasicView parentSetTheme={setTheme} />}
      </div>
    </div>
  );
}
