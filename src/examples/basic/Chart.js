import React, { useState, useEffect, useRef } from 'react';
import {
  chartInit,
  chartDraw,
  chartThemes,
  chartConfig,
} from '@talkrz/price-chart';
import useDimensions from '../../hooks/useDimensions';
import './Chart.css';

export default function Chart({ data, theme, zoom }) {
  // customize the default config object
  const config = chartConfig();
  config.padding = 4;
  config.fontSize = 12;
  config.geometry.boxPrice.padding = 4;
  config.geometry.boxVolume.padding = 4;

  // use predefined style, you can use your own as well
  const chartTheme = chartThemes()[theme];

  const contentRef = useRef();
  const canvasBaseRef = useRef();
  const canvasScaleRef = useRef();
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
        base: canvasBaseRef.current.getContext("2d"),
        scale: canvasScaleRef.current.getContext("2d"),
      },
      data,
      width,
      height,
      devicePixelRatio,
      zoom,
      0,
      chartTheme,
      locale,
    );

    // draw chart on the canvas
    chartDraw();
  }, [data.length, width, height, zoom, theme])

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
