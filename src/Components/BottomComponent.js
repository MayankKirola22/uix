import "./BottomComponent.css";
import ImageEffect from "./ImageEffect.js";
import Loading from "./Loading.js";
import down from "../resources/Down.svg"
import { useEffect, useState } from "react";
import chatOpen from "../resources/chatOpen.png";
import chatClosed from "../resources/chatClose.png";

export default function BottomComponent({color,displayHeight}){
    const [popChecks,setPopChecks]=useState([0,...Array(3).fill(false)]);
    const [popOpen,setPopOpen]=useState(false);
    const [helpOpen,setHelpOpen]=useState(false);
    const [switcher,setSwitcher]=useState(0)
    const handleChange=(e,index)=>{
        var updated=[];
        if(index===0){
            for(let i=0;i<popChecks.length;i++)
                    updated.push(e.target.checked)
        }
        else{
            for(let i=0;i<popChecks.length;i++){
                if(i!==index)
                    updated.push(popChecks[i])
                else
                    updated.push(e.target.checked)
            };
            if(updated.slice(1,4).filter((e)=>e===true).length===0)
                updated[0]=false
            else
                updated[0]=true

        }
        setPopChecks(updated);
    }
    useEffect(()=>{
        const Selector = document.getElementById("BottomComponent");
        Selector.style.setProperty('--Color', `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`);
        Selector.style.setProperty('--activeButtonColor',`linear-gradient(180deg, hsl(${color[0]}, ${color[1]-18}%, ${color[2]-13}%) 0%, hsl(${color[0]}, ${color[1]}%, ${color[2]}%) 100%)`)
    },[color])
    return(
        <div id="BottomComponent">
            <ImageEffect color={color} displayHeight={displayHeight}/>
            <Loading color={color}/>
            <div className="modelContainer">
                <div className="model" onClick={()=>setPopOpen(!popOpen)}>
                    <div style={{color:'rgba(255,255,255,0.6)'}}>Select item</div>
                    <div><img src={down} alt="down" className="down"/></div>
                </div>
                <div className="popup" style={{height:popOpen?"140px":"0px",padding:popOpen?'10px 10px':"0px 10px",transitionDuration:"0.5s"}}>
                    <div className='popOption' >
                        <input type="checkbox" checked={popChecks[0]} onChange={e=>handleChange(e,0)} className="popCheckbox popCheckboxAll"/> <label style={{position:'relative'}}>All</label>
                    </div>
                    <div className='popOption' >
                        <input type="checkbox" checked={popChecks[1]} onChange={e=>handleChange(e,1)} className="popCheckbox"/> <label style={{position:'relative'}}>Ui/UX Design</label>
                    </div>
                    <div className='popOption' >
                        <input type="checkbox" checked={popChecks[2]} onChange={e=>handleChange(e,2)} className="popCheckbox"/> <label style={{position:'relative'}}>Frontend</label>
                    </div>
                    <div className='popOption' >
                        <input type="checkbox" checked={popChecks[3]} onChange={e=>handleChange(e,3)} className="popCheckbox"/> <label style={{position:'relative'}}>Backend</label>
                    </div>
                </div>
                <div className="help" style={{backgroundColor:!helpOpen?`hsl(${color[0]},${color[1]}%,${color[2]}%)`:"black",opacity:popOpen?0:1,pointerEvents:popOpen?"none":'auto'}} onClick={()=>setHelpOpen(!helpOpen)}><img src={helpOpen?chatClosed:chatOpen} className="helpImg" alt="help"/></div>
                <div className="helpFloat" style={helpOpen?{opacity:1,pointerEvents:'auto',right:'20%',bottom:'20%',animation:"popOpen 0.5s ease"}:{opacity:0,pointerEvents:'none',right:'-40%',bottom:'-40%'}}>
                    <div style={{display:'flex',alignItems:"center"}}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_33_1421)">
                                <path d="M15.833 0.833984L14.783 3.12565L12.4997 4.16732L14.783 5.21732L15.833 7.50065L16.8747 5.21732L19.1663 4.16732L16.8747 3.12565M7.49967 3.33398L5.41634 7.91732L0.833008 10.0007L5.41634 12.084L7.49967 16.6673L9.58301 12.084L14.1663 10.0007L9.58301 7.91732M15.833 12.5007L14.783 14.784L12.4997 15.834L14.783 16.8757L15.833 19.1673L16.8747 16.8757L19.1663 15.834L16.8747 14.784" fill={`hsl(${color[0]},${color[1]}%,${color[2]}%)`}/>
                            </g>
                            <defs>
                            <clipPath id="clip0_33_1421">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div style={{margin:"10px",fontSize:'16px'}}>Ask AI</div>
                    </div>
                    <textarea type="textarea" placeholder="Make this page using react js" className="input"/>
                    <div style={{display:'flex',width:"100%",justifyContent:'space-between',alignItems:'center'}}>
                        <div className="switcher">
                            <div className="switch" style={{backgroundColor:!switcher?'rgb(23,23,26)':'transparent',color:!switcher?'rgb(255,255,255)':'rgba(255,255,255,0.6)'}} onClick={()=>setSwitcher(0)}>React</div>
                            <div className="switch" style={{backgroundColor:switcher?'rgb(23,23,26)':'transparent',color:switcher?'rgb(255,255,255)':'rgba(255,255,255,0.6)'}} onClick={()=>setSwitcher(1)}>Vue</div>
                        </div>
                        <div className="button" style={{background: `linear-gradient(180deg, hsl(${color[0]}, ${color[1]}%, ${color[2]}%) 0%, hsl(${color[0]}, ${color[1]}%, ${color[2]-10}%) 100%)`}}>Generate</div>
                    </div>
                </div>
            </div>      
        </div>
    )
}