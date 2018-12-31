export default function mouseHandlerZoom(zoom, setZoom) {
  return function wheelHandler(event) {
    let delta = event.deltaY;
    if (delta >= 1) delta = 1;
    if (delta <= -1) delta = -1;
    let newZoom = zoom - delta;
    setZoom(Math.round(newZoom));
  }
}
