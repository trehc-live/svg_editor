import React from "react"
import cf from './main-svgcanvas-funcs.js';

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
    </div>
  );
}

export default MainSVGCanvas;
