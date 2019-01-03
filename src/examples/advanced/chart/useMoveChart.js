import { useState } from 'react';

export default function useMoveChart(canvasRef, zoom, minOffset) {
  const [chartOffset, setChartOffset] = useState(0);
  const [chartPreviousOffset, setChartPreviousOffset] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  function mouseDownHanlder(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;
    setDragStartX(event.clientX - x);
  }

  function touchStartHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;
    setDragStartX(event.touches[0].clientX - x);
  }

  function mouseUpHandler(event) {
    setChartPreviousOffset(chartOffset);
  }

  function touchEndHandler(event) {
    setChartPreviousOffset(chartOffset);
  }

  function mouseMoveHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;

    if (event.buttons & 1) {
      const newOffset =  Math.round((dragStartX - event.clientX - x) / zoom);
      if (newOffset !== chartOffset) {
        setChartOffset(Math.max(minOffset, newOffset + chartPreviousOffset));
      }
    }
  }

  function touchMoveHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;

    const newOffset =  Math.round((dragStartX - event.touches[0].clientX - x) / zoom);
    if (newOffset !== chartOffset) {
      setChartOffset(Math.max(minOffset, newOffset + chartPreviousOffset));
    }
  }

  return [
    chartOffset,
    {
      mouseDownHanlder,
      mouseUpHandler,
      mouseMoveHandler,
      touchStartHandler,
      touchEndHandler,
      touchMoveHandler,
    }
  ]
}
