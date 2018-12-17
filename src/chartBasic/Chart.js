import React, { useState, useEffect, useRef } from 'react';

import {
  chartInit,
  chartDraw,
} from '@talkrz/price-chart';
import useDimensions from '../hooks/useDimensions';
import './Chart.css';

export default function Chart({ data, style, zoom }) {
  const contentRef = useRef();
  const canvasRef = useRef();
  const canvasCrosshairRef = useRef();
  // hook that handles updating width and height according to current dimensions
  // supporting window resize
  const [width, height] = useDimensions(contentRef);
  const [devicePixelRatio] = useState(window.devicePixelRatio);
  const [locale] = useState('en');

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
      0,
      style,
      locale,
    );

    // draw chart on the canvas
    chartDraw();
  }, [data.length, width, height, zoom, style])

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
      />
    </div>
  )
}
