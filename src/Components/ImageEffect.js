import React, { useRef, useEffect } from "react";
import image from "../resources/image.png";
import resizer from "../resources/Resizer.png";
import "./ImageEffect.css";

export default function ImageEffect({color}) {
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
    
    // Right resize
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - x;
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

    // Add mouse down event listener
    resizerRight.addEventListener("mousedown", onMouseDownRightResize);

    return () => {
      resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };
  }, []);

  return (
    <div className="ImageEffectContainer" draggable={false}>
        <div className="ImageEffect">
            <img src={image} alt="childImage" draggable={false} className="childImage"/>
            <div ref={ref} className="resizeable" style={{backgroundColor:`hsla(${color[0]},${color[1]}%,${color[2]}%,38%)`}}>
            </div>
        </div>
        <div ref={refRight} className="resizer resizer-r"><div className="resizerElement"/></div>
    </div>
  );
}