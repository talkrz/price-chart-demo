import React, { useState, useEffect, useRef } from 'react';
import {
  chartInit,
  chartDraw,
  chartThemes,
  chartDefaultConfig,
} from '@talkrz/price-chart';
import useDimensions from '../../hooks/useDimensions';
import './Chart.css';

export default function Chart({ data, theme, zoom }) {
  const contentRef = useRef();
  const canvasBaseRef = useRef();
  const canvasScaleRef = useRef();

  // hook that handles updating width and height according to current dimensions
  // supporting window resize
  const [width, height] = useDimensions(contentRef);

  // customize the default config object
  const config = chartDefaultConfig();
  config.padding = 4;
  config.fontSize = 12;
  config.geometry.boxPrice.padding = 4;
  config.geometry.boxVolume.padding = 4;

  // use predefined style, you can use your own as well
  const chartTheme = chartThemes()[theme];

  const [devicePixelRatio] = useState(window.devicePixelRatio);

  const chartState = {
    width,
    height,
    devicePixelRatio,
    zoom,
    offset: 0,
    config,
    theme: chartTheme,
  }

  // chart drawing effect
  useEffect(() => {
    if (!data.length) return;

    // init chart view
    chartInit(
      data,
      {
        base: canvasBaseRef.current.getContext("2d"),
        scale: canvasScaleRef.current.getContext("2d"),
      },
      chartState,
    );

    // draw chart on the canvas
    chartDraw();
  }, [width, height, zoom, theme])

  return (
    <div className="Chart" ref={contentRef}>
      <canvas
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        ref={canvasBaseRef}
        className="Chart-canvas"
        style={{ width, height }}
      />
      <canvas
        width={width * devicePixelRatio}
        height={height * devicePixelRatio}
        ref={canvasScaleRef}
        className="Chart-canvas-scale"
        style={{ width, height }}
      />
    </div>
  )
}
