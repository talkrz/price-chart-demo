export default function mouseHandlerZoom(zoom, setZoom) {
  return function wheelHandler(event) {
    let newZoom = zoom - event.deltaY;
    setZoom(Math.round(newZoom));
  }
}
