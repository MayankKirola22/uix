import React, { useRef, useEffect } from "react";
import image from "../resources/image.png";
import "./ImageEffect.css";

export default function ImageEffect({color,displayWidth}) {
  const ref = useRef(null);
  const refRight = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    const resizerRight = refRight.current;
    let x = 0;
    let width = 249;
    resizeableEle.style.width = `${width}px`;
    resizerRight.style.left=`${width+43}px`;
    const styles = window.getComputedStyle(resizeableEle);
    
    // Mouse Events
    const onMouseMoveRightResize = (event) => {
      const dx = (event.clientX - x)*(1500/displayWidth);
      x = event.clientX;
      width = width + dx;
      if(width<0){
        width=0;
      }
      if(width>498){
        width=498;
      }
      resizeableEle.style.width = `${width}px`;
      resizerRight.style.left=`${width+43}px`;
    };

    const onMouseUpRightResize = () => {
      document.removeEventListener("mousemove", onMouseMoveRightResize);
    };

    const onMouseDownRightResize = (event) => {
      x = event.clientX;
      resizeableEle.style.left = styles.left;
      resizeableEle.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize);
      document.addEventListener("mouseup", onMouseUpRightResize);
    };

    // Touch Events

    const onTouchMoveRightResize = (event) => {
      const dx = (event.touches[0].clientX - x)*(1500/displayWidth);
      x = event.touches[0].clientX;
      width = width + dx;
      if(width<0){
        width=0;
      }
      if(width>498){
        width=498;
      }
      resizeableEle.style.width = `${width}px`;
      resizerRight.style.left=`${width+43}px`;
    };
    const onTouchEndRightResize = () => {
      document.removeEventListener("touchmove", onTouchMoveRightResize);
    };
    const onTouchStartRightResize = (event) => {
      event.preventDefault();
      x = event.touches[0].clientX;
      resizeableEle.style.top = styles.top;
      resizeableEle.style.bottom = null;
      document.addEventListener("touchmove", onTouchMoveRightResize);
      document.addEventListener("touchend", onTouchEndRightResize);
    };

    resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    resizerRight.addEventListener("touchstart", onTouchStartRightResize);
    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
      resizerRight.removeEventListener("touchstart", onTouchStartRightResize);
    };
  }, [displayWidth]);

  return (
    <div id="ImageEffectContainer" draggable={false}>
        <div className="ImageEffect">
            <img src={image} alt="childImage" draggable={false} className="childImage"/>
            <div ref={ref} className="resizeable" style={{backgroundColor:`hsla(${color[0]},${color[1]}%,${color[2]}%,38%)`}}>
            </div>
        </div>
        <div ref={refRight} className="resizer resizer-r"><div className="resizerElement"/></div>
    </div>
  );
}