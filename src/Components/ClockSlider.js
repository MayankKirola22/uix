import "./ClockSlider.css";
import clockBg from "../resources/clockBg.png";
import arrowDown from "../resources/arrowDown.png";
import { useEffect, useRef, useState } from "react";
import clockFrame from "../resources/ClockFrame.png";
export default function ClockSlider({color,Height,displayHeight}){
    const [time,setTime]=useState([0,0,0]);
    const [currTime,setCurrTime]=useState("")  
    const ref = useRef(null);
    const refDown = useRef(null);
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
          // This will trigger a rerender every component that uses the useDate hook.
          let x=new Date();
          setCurrTime(x.toLocaleTimeString("en-GB"));
          setTime([x.getHours(),x.getMinutes(),x.getSeconds()])
        }, 1000);
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizeableEle);
        let height = parseInt(styles.height, 10);
        let y = 0;

        if(height>(Height-238)){
          height=Height-238;
          resizeableEle.style.height = `${height}px`;
        }

        // Mouse Events
        
        const onMouseMoveHeightResize = (event) => {
          const dy = event.clientY - y;
          y = event.clientY;
          height = height + dy;
          resizeableEle.style.height = `${height}px`;
          if(height<0){
            height=0;
            resizeableEle.style.height = `${height}px`;
          }
          if(height>(Height-238)){
            height=Height-238;
            resizeableEle.style.height = `${height}px`;
          }
        };
        const onMouseUpHeightResize = () => {

          if(height>Height-350){
            height=Height-238;
            resizeableEle.style.transition="all 1s ease-in-out";
            resizeableEle.style.height=`${height}px`
          }
          if(height<100){
            height=0;
            resizeableEle.style.transition="all 1s ease-in-out";
            resizeableEle.style.height=`${height}px`
          }
          document.removeEventListener("mousemove", onMouseMoveHeightResize);
        };
        const onMouseDownHeightResize = (event) => {
          y = event.clientY;
          resizeableEle.style.top = styles.top;
          resizeableEle.style.transition="all 0s";
          resizeableEle.style.bottom = null;
          document.addEventListener("mousemove", onMouseMoveHeightResize);
          document.addEventListener("mouseup", onMouseUpHeightResize);
        };

        // Touch Events

        const onTouchMoveHeightResize = (event) => {
          const dy = (event.touches[0].clientY - y)*(displayHeight/200);
          y = event.touches[0].clientY;
          height = height + dy;
          resizeableEle.style.height = `${height}px`;
          if(height<0){
            height=0;
            resizeableEle.style.height = `${height}px`;
          }
          if(height>(Height-238)){
            height=Height-238;
            resizeableEle.style.height = `${height}px`;
          }
        };
        const onTouchEndHeightResize = () => {
          if(height>Height-350){
            height=Height-238;
            resizeableEle.style.transition="all 1s ease-in-out";
            resizeableEle.style.height=`${height}px`
          }
          if(height<100){
            height=0;
            resizeableEle.style.transition="all 1s ease-in-out";
            resizeableEle.style.height=`${height}px`
          }
          document.removeEventListener("touchmove", onTouchMoveHeightResize);
        };
        const onTouchStartHeightResize = (event) => {
          event.preventDefault();
          y = event.touches[0].clientY;
          resizeableEle.style.top = styles.top;
          resizeableEle.style.bottom = null;
          resizeableEle.style.transition="all 0s";
          document.addEventListener("touchmove", onTouchMoveHeightResize);
          document.addEventListener("touchend", onTouchEndHeightResize);
        };
    
        const resizerDown = refDown.current;
        resizerDown.addEventListener("mousedown", onMouseDownHeightResize);
        resizerDown.addEventListener('touchstart',onTouchStartHeightResize);
        return () => {
          resizerDown.removeEventListener("mousedown", onMouseDownHeightResize);
          resizerDown.removeEventListener('touchstart',onTouchStartHeightResize);
          clearInterval(timer);
        };
      }, [Height,displayHeight]);
    return(
        <div className="ClockSlider">
            <img src={clockBg} draggable={false} alt="bg" className="clockbg"/>
            <div className="gradient" style={{background:`linear-gradient(hsla(${color[0]},${color[1]}%,${color[2]}%,0%),hsla(${color[0]},${color[1]}%,${color[2]}%,100%))`}}/>
            <div ref={ref} className="clockSlider" draggable={false}>
                <div className="clock" draggable={false} ref={refDown}>
                    <img draggable={false} className="clockFrame" alt="clockFrame" src={clockFrame}/>
                    <div className="handDiv" id='minuteDiv' style={{transform:`rotate(${time[1]*6-90}deg)`}}>
                        <div className="hands" id="minuteHand"/>
                    </div>
                    <div className="handDiv" id='hourDiv' style={{transform:`rotate(${time[0]*30+time[1]*0.5-90}deg)`}}>
                        <div className="hands" id="hourHand"/>
                    </div>
                    <div className="handDiv" id='secondDiv' style={{transform:`rotate(${time[2]*6-90}deg)`}}>
                        <div className="hands" style={{backgroundColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}} id="secondHand"/>
                    </div>
                    <div className="middle" style={{backgroundColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}}/>
                </div>
            </div>
            <div className="time">{currTime.slice(0,5)}</div>
            <img className="arrowDown" alt="down" src={arrowDown}/>
            <div className="clockPos" style={{borderColor:`hsl(${color[0]},${color[1]}%,${color[2]+15}%)`}}/>
        </div>
    )
}