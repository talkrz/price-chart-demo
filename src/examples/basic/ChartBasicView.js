import React from 'react';
import Chart from './Chart';
import getData from '../../data/getData';
import './ChartBasicView.css';

export default function ChartBasicView({ parentSetTheme }) {
  // the basic example does not support themes, so set light
  const theme = 'light';

  return (
    <div className="ChartBasicView">
      <div className="ChartBasicView-container">
        <Chart
          data={getData()}
          zoom={7}
          theme={theme}
        />
      </div>
    </div>
  )
}
