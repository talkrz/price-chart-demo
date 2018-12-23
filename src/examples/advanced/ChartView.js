import React, { useState, useEffect } from 'react';
import ChartContainer from './chart/ChartContainer';
import ChartSidebar from './chart/ChartSidebar';
import './ChartView.css';

export default function ChartView({ parentSetTheme }) {
  const [chartViewModel, setChartViewModel] = useState({
    data: []
  });
  const [zoom, setZoom] = useState(8);
  const [theme, setTheme] = useState('light');
  const [chartType, setChartType] = useState('candlestick');
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
          theme={theme}
          chartType={chartType}
          setChartViewModel={setChartViewModel}
          setCursorData={setCursorData}
        />
      </div>
      <ChartSidebar
        chartViewModel={chartViewModel}
        cursorData={cursorData}
        theme={theme}
        setTheme={setTheme}
        chartType={chartType}
        setChartType={setChartType}
        zoom={zoom}
        setZoom={setZoom}
      />
    </>
  )
}
