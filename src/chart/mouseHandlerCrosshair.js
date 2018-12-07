export default function mouseHandlerCrosshair(canvasRef, drawCrosshair, setCursorPosition) {
  return function mouseMoveHandler(event) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    setCursorPosition(event.clientX - x, event.clientY - y);

    window.requestAnimationFrame(drawCrosshair);
  }
}
