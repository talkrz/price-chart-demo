import React, { useState, useEffect, useRef } from 'react';
import {
  initChart,
  drawChart,
  setCursorPosition,
  getChartViewModel,
} from '@talkrz/price-chart';
import './Chart.css';

export default function Chart({ data, style, zoom, setZoom, setChartViewModel }) {
  const contentRef = useRef();
  const canvasRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [devicePixelRatio] = useState(window.devicePixelRatio);

  useEffect(() => {
    setWidth(contentRef.current.offsetWidth);
  }, [])

  useEffect(() => {
    setHeight(contentRef.current.offsetHeight);
  }, [])

  function mouseMoveHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    setCursorPosition(event.clientX - x, event.clientY - y);
    window.requestAnimationFrame(drawChart);
  }

  function wheelHandler(e) {
    const min = 2;
    const max = 20;
    let newZoom = zoom - e.deltaY;
    if (newZoom < min) newZoom = min;
    if (newZoom > max) newZoom = max;
    setZoom(newZoom);
  }

  function prepareChart() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    initChart(
      ctx,
      data,
      width,
      height,
      devicePixelRatio,
      {
        stickLength: zoom,
        stickMargin: style && style.stickMargin ? style.stickMargin : 2,
        colorBackground: style && style.colorBackground ? style.colorBackground : '#fff',
        colorBear: style && style.colorBear ? style.colorBear : '#ff4444',
        colorBull: style && style.colorBull ? style.colorBull : '#000',
        colorBearBorder: style && style.colorBearBorder ? style.colorBearBorder : '#ff4444',
        colorBullBorder: style && style.colorBullBorder ? style.colorBullBorder : '#000',
        colorGrid: style && style.colorGrid ? style.colorGrid : '#f4f4f4',
        colorBorder: style && style.colorBorder ? style.colorBorder : '#e8e8e8',
        colorScale: style && style.colorScale ? style.colorScale : '#666',
        colorCrosshair: style && style.colorCrosshair ? style.colorCrosshair : '#ccc',
        fontSize: style && style.fontSize ? style.fontSize : 14,
        padding: style && style.padding ? style.padding : 5,
        margin: style && style.margin ? style.margin : [10, 10, 10, 10],
        candlestickHeight: 0.8,
        scaleWidth: 50,
      },
      'en',
    );

    drawChart();
  }

  useEffect(() => {
    if (data.length) {
      prepareChart();
      setChartViewModel(getChartViewModel());
    }
  }, [data.length, width, height, zoom, style])

  return (
    <div className="Chart" ref={contentRef}>
      <canvas
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        ref={canvasRef}
        className="Chart-canvas"
        style={{ width, height }}
        onMouseMove={mouseMoveHandler}
        onWheel={wheelHandler}
      />
    </div>
  )
}
