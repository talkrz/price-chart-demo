import React from 'react';
import Chart from './Chart.js';
import getData from '../../../data/getData';
/**
 * Chart container component responsible for preparing data
 * for the Chart component
 */
export default function ChartContainer({ theme, chartType, zoom, setZoom, setChartViewModel, setCursorData }) {
  return (
    <Chart
      data={getData()}
      setChartViewModel={setChartViewModel}
      setCursorData={setCursorData}
      theme={theme}
      chartType={chartType}
      zoom={zoom}
      setZoom={setZoom}
    />
  )
}
