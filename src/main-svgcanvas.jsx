import React from "react"
import cf from './main-svgcanvas-funcs.js';

<<<<<<< HEAD
function MainSVGCanvas(props) {
  return (
    <div id = 'main-svgcanvas' className="soft-angles mpz"
      onTouchStart={cf.drag_start}
      onTouchMove={cf.drag}
      onTouchEnd={cf.drag_end}
      onMouseDown={cf.drag_start}
      onMouseMove={cf.drag}
      onMouseUp={cf.drag_end}
      onWheel={cf.mouse_wheel}>
=======
function MainSVGCanvas() {
  return (
    <div id = 'main-svgcanvas' className="soft-angles mpz">
        <cf.get_map_svg></cf.get_map_svg>
>>>>>>> ed6619d (big changes, trying with translate3d)
    </div>
  );
}

<<<<<<< HEAD
export default MainSVGCanvas;
=======
export default MainSVGCanvas;
>>>>>>> ed6619d (big changes, trying with translate3d)
