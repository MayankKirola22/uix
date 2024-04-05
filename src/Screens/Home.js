import { useEffect, useRef, useState } from "react";
import ColorSlider from "../Components/ColorSlider";
import "./Home.css";
import ColorShades from "../Components/ColorShades";
import ClockSlider from "../Components/ClockSlider";
import Tasks from "../Components/Tasks";
import Models from "../Components/Models";
import BottomComponent from "../Components/BottomComponent";

export default function Home({color,setColor}){
    const refCd1 = useRef(null);
    const refCd2 = useRef(null);
    const refCd3 = useRef(null);
    const refRd1 = useRef(null);
    const refRd2 = useRef(null);
    const refSplit1 = useRef(null);
    const refSplit2 = useRef(null);
    const refSplit3 = useRef(null);
    const [Rd1Height,setRd1Height] = useState(600);
    const [Cd1Width,setCd1Width] = useState(300);
    const [Cd3Width,setCd3Width] = useState(300);
  useEffect(() => {
    let cd1 = refCd1.current;
    let cd2 = refCd2.current;
    let cd3 = refCd3.current;
    let rd1 = refRd1.current;
    let rd2 = refRd2.current;

    const cd1Styles = window.getComputedStyle(cd1);
    const cd2Styles = window.getComputedStyle(cd2);
    const rd1Styles = window.getComputedStyle(rd1);
    let cd1Width = 300;
    let cd3Width = 300;
    let rd1Height = 600;
    let x = 0;
    let y=0;
    cd1.style.width = `${cd1Width}px`;
    cd2.style.width = "642px";
    cd3.style.width = `${cd3Width}px`;
    rd1.style.height = `${rd1Height}px`;
    rd2.style.height = "261px";
    // Right resize col - div 1 & col - div 2
    
    const onMouseMoveRightResize1 = (event) => {
      const dx = event.clientX - x;
      x = event.clientX;
      cd1Width = cd1Width + dx;
      
      if(cd1Width>400){
        cd1Width=400;
      }
      if(cd1Width<300){
        cd1Width=300;
      }
      cd1.style.width = `${cd1Width}px`;
      cd2.style.width = `${1242 -cd1Width-cd3Width}px`
      setCd1Width(cd1Width);
    };

    const onMouseUpRightResize1 = () => {
      document.removeEventListener("mousemove", onMouseMoveRightResize1);
    };

    const onMouseDownRightResize1 = (event) => {
      x = event.clientX;
      cd1.style.left = cd1Styles.left;
      cd1.style.right = null;
      document.addEventListener("mousemove", onMouseMoveRightResize1);
      document.addEventListener("mouseup", onMouseUpRightResize1);
    };

    // Right resize col - div 2 & col - div 3
    
    const onMouseMoveRightResize2 = (event) => {
        const dx = event.clientX - x;
        x = event.clientX;
        cd3Width = cd3Width - dx;
          if(cd3Width<300){
            cd3Width=300;
            cd3.style.width = `${cd3Width}px`;
          }
          if(cd3Width>400){
            cd3Width=400;
            cd3.style.width = `${cd3Width}px`;
          }
          cd3.style.width = `${cd3Width}px`;
          cd2.style.width = `${1242-cd3Width-cd1Width}px`
          setCd3Width(cd3Width);
      };
  
      const onMouseUpRightResize2 = () => {
        document.removeEventListener("mousemove", onMouseMoveRightResize2);
      };
  
      const onMouseDownRightResize2 = (event) => {
        x = event.clientX;
        cd2.style.left = cd2Styles.left;
        cd2.style.right = null;
        document.addEventListener("mousemove", onMouseMoveRightResize2);
        document.addEventListener("mouseup", onMouseUpRightResize2);
      };

    // Down Resize 

    const onMouseMoveDownResize = (event) => {
        const dy = event.clientY - y;
        y = event.clientY;
        rd1Height = rd1Height + dy;
          if(rd1Height<500){
            rd1Height=500;
          }
          if(rd1Height>600){
            rd1Height=600;
          }
          rd1.style.height = `${rd1Height}px`;
          rd2.style.height = `${861-rd1Height}px`
          setRd1Height(rd1Height);
      };
  
      const onMouseUpDownResize = () => {
        document.removeEventListener("mousemove", onMouseMoveDownResize);
      };
  
      const onMouseDownDownResize = (event) => {
        y = event.clientY;
        rd1.style.top = rd1Styles.top;
        rd1.style.bottom = null;
        document.addEventListener("mousemove", onMouseMoveDownResize);
        document.addEventListener("mouseup", onMouseUpDownResize);
      };

    // Add mouse down event listener
    const resizerV1 = refSplit1.current;
    const resizerV2 = refSplit2.current;
    const resizerH1 = refSplit3.current;

    resizerV1.addEventListener("mousedown", onMouseDownRightResize1);
    resizerV2.addEventListener("mousedown", onMouseDownRightResize2);
    resizerH1.addEventListener("mousedown", onMouseDownDownResize);

    return () => {
      resizerV1.removeEventListener("mousedown", onMouseDownRightResize1);
      resizerV2.removeEventListener("mousedown", onMouseDownRightResize2);
      resizerH1.removeEventListener("mousedown", onMouseDownDownResize);
    };
  }, []);


    return(
        <div id="Home">
            <div style={{display:"flex",justifyContent:'space-between',width:"1315px"}}>
              <ColorSlider value={color} setValue={setColor}/>
              <ColorShades value={color} setValue={setColor}/>
            </div>
            <div className="containerDiv" >
                <div id='rd1' ref={refRd1} className="rowDiv">
                    <div id="cd1" ref={refCd1} className="colDiv innerDiv" ><Tasks color={color}/></div>
                    <div ref={refSplit1} className="verticalSpliterDiv spliterDiv" id='vsd1' style={{cursor:Cd1Width===300?"e-resize":Cd1Width===400?"w-resize":"ew-resize"}}><div className="spliterIcon"/></div>
                    <div id="cd2" ref={refCd2} className="colDiv innerDiv"><Models color={color}/></div>
                    <div ref={refSplit2} className="verticalSpliterDiv spliterDiv" id="vsd2" style={{cursor:Cd3Width===300?"w-resize":Cd3Width===400?"e-resize":"ew-resize"}}><div className="spliterIcon"/></div>
                    <div id="cd2" ref={refCd3} className="colDiv innerDiv" ><ClockSlider color={color} Height={Rd1Height}/></div>
                </div>
                <div ref={refSplit3} className="horizontalSpliterDiv spliterDiv" id="hsd" style={{cursor:Rd1Height===500?"s-resize":Rd1Height===600?"n-resize":"ns-resize"}}><div className="spliterIcon"/></div>
                <div ref={refRd2} id="rd2" className="rowDiv innerDiv" ><BottomComponent color={color}/></div>
            </div>
        </div>
    )
}