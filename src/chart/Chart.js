import React, { useState, useEffect, useRef } from 'react';
import {
  chartInit,
  chartSetCursor,
  chartDraw,
  chartDrawCrosshair,
  chartGetViewModel,
} from '@talkrz/price-chart';
import useDimensions from '../hooks/useDimensions';

import mouseHandlerZoom from './mouseHandlerZoom';
import useMoveChart from './useMoveChart';
import mouseHandlerCrosshair from './mouseHandlerCrosshair';

import './Chart.css';

export default function Chart({ data, style, zoom, setZoom, setChartViewModel }) {
  const contentRef = useRef();
  const canvasRef = useRef();
  const canvasCrosshairRef = useRef();
  // hook that handles updating width and height according to current dimensions
  // supporting window resize
  const [width, height] = useDimensions(contentRef);
  const [devicePixelRatio] = useState(window.devicePixelRatio);
  const [locale] = useState('en');

  // prepare handlers for mouse interactions
  const wheelHandler = mouseHandlerZoom(zoom, setZoom);
  const crosshairMoveHandler = mouseHandlerCrosshair(
    canvasRef,
    chartDrawCrosshair,
    chartSetCursor,
  );
  const [chartOffset, chartMoveHandlers] = useMoveChart(canvasRef, zoom);

  // chart drawing effect
  useEffect(() => {
    if (!data.length) return;

    // init chart view
    chartInit(
      {
        base: canvasRef.current.getContext("2d"),
        crosshair: canvasCrosshairRef.current.getContext("2d"),
      },
      data,
      width,
      height,
      devicePixelRatio,
      zoom,
      chartOffset,
      style,
      locale,
    );

    // draw chart on the canvas
    chartDraw();

    // retrieve view model containing useful data about displayed chart
    setChartViewModel(chartGetViewModel());
  }, [data.length, width, height, zoom, style, chartOffset])

  return (
    <div className="Chart" ref={contentRef}>
      <canvas
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        ref={canvasRef}
        className="Chart-canvas"
        style={{ width, height }}
      />
      <canvas
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        ref={canvasCrosshairRef}
        className="Chart-canvas-crosshair"
        style={{ width, height }}
        onMouseMove={(e) => {
          chartMoveHandlers.mouseMoveHandler(e);
          crosshairMoveHandler(e);
        }}
        onWheel={wheelHandler}
        onMouseDown={chartMoveHandlers.mouseDownHanlder}
        onMouseUp={chartMoveHandlers.mouseUpHandler}
      />
    </div>
  )
}
