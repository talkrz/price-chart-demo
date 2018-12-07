import React, { useEffect } from 'react';
import Chart from './chartBasic/Chart';
import getData from './data/getData';
import './ChartBasicView.css';

const style = {
  stickMargin: 2,
  colorBackground: '#fff',
  colorBear: '#ff4444',
  colorBull: '#fff',
  colorBearBorder: '#ff4444',
  colorBullBorder: '#000',
  colorGrid: '#f4f4f4',
  colorBorder: '#e8e8e8',
  colorScale: '#666',
  colorCrosshair: '#ccc',
  fontSize: 14,
  padding: 5,
  margin: [10, 10, 10, 10],
  candlestickHeight: 0.8,
  scaleWidth: 38,
};

export default function ChartBasicView({ parentSetTheme }) {
  // the basic example does not support themes, so set light
  useEffect(() => {
    parentSetTheme('light');
  }, []);

  return (
    <div className="ChartBasicView">
      <div className="ChartBasicView-container">
        <Chart
          data={getData()}
          zoom={7}
          style={style}
        />
      </div>
    </div>
  )
}
