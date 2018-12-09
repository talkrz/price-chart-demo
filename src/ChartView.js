import React, { useState, useEffect } from 'react';
import ChartContainer from './chart/ChartContainer';
import ChartSidebar from './chart/ChartSidebar';
import './ChartView.css';

const styles = {
  light: {
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
    geometry: {
      boxPrice: {
        height: 0.8,
        top: 0,
        padding: 5,
        margin: [10, 48, 10, 10],
      },
      boxVolume: {
        height: 0.2,
        top: 0.8,
        padding: 5,
        margin: [10, 48, 10, 10],
      }
    },
  },
  dark: {
    stickMargin: 2,
    colorBackground: '#000',
    colorBear: '#aa2222',
    colorBull: '#000',
    colorBearBorder: '#aa2222',
    colorBullBorder: '#00aa22',
    colorGrid: '#222',
    colorBorder: '#333',
    colorScale: '#aaa',
    colorCrosshair: '#666',
    fontSize: 14,
    padding: 5,
    margin: [10, 10, 10, 10],
    geometry: {
      boxPrice: {
        height: 0.8,
        top: 0,
        padding: 5,
        margin: [10, 10, 10, 10],
      },
      boxVolume: {
        height: 0.2,
        top: 0.8,
        padding: 5,
        margin: [10, 10, 10, 10],
      }
    },
  },
}

export default function ChartView({ parentSetTheme }) {
  const [chartViewModel, setChartViewModel] = useState({
    data: []
  });
  const [zoom, setZoom] = useState(8);
  const [theme, setTheme] = useState('light');
  const [cursorData, setCursorData] = useState([null, null]);

  useEffect(() => {
    parentSetTheme(theme)
  }, [theme])

  return (
    <>
      <div className="ChartView-chart-container">
        <ChartContainer
          zoom={zoom}
          setZoom={setZoom}
          style={styles[theme]}
          setChartViewModel={setChartViewModel}
          setCursorData={setCursorData}
        />
      </div>
      <ChartSidebar
        chartViewModel={chartViewModel}
        cursorData={cursorData}
        theme={theme}
        setTheme={setTheme}
        zoom={zoom}
        setZoom={setZoom}
      />
    </>
  )
}
