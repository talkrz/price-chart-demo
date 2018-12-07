import { useState } from 'react';

export default function useMoveChart(canvasRef, zoom) {
  const [chartOffset, setChartOffset] = useState(0);
  const [chartPreviousOffset, setChartPreviousOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  function mouseDownHanlder(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;
    setDragStartX(event.clientX - x);
  }

  function mouseUpHandler(event) {
    setChartPreviousOffset(chartOffset);
  }

  function mouseMoveHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;

    if (event.buttons & 1) {
      const newOffset =  Math.round((dragStartX - event.clientX - x) / zoom);
      if (newOffset !== chartOffset) {
        setChartOffset(newOffset + chartPreviousOffset);
      }
    }
  }

  return [
    chartOffset,
    {
      mouseDownHanlder,
      mouseUpHandler,
      mouseMoveHandler,
    }
  ]
}
