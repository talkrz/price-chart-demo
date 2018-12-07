import React from 'react';
import ChartContainer from './chart/ChartContainer';
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

export default function ChartBasicView() {

  return (
    <div className="ChartBasicView">
      <div className="ChartBasicView-container">
        <ChartContainer
          zoom={7} style={style} setChartViewModel={() => { /* we do nothing with this */}}
        />
      </div>
    </div>
  )
}
