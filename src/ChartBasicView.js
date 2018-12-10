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
  fontSize: 12,
  padding: 4,
  geometry: {
    boxPrice: {
      height: 0.8,
      top: 0,
      padding: 4,
      margin: [10, 48, 10, 10],
    },
    boxVolume: {
      height: 0.2,
      top: 0.8,
      padding: 4,
      margin: [7, 48, 10, 10],
    }
  },
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
