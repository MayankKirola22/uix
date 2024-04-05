import { useEffect, useState } from "react";
import "./Tasks.css";

export default function Tasks({color}){
    const Tasks=["Frontend","Review the design","Estimate the time","Code UI","Testing","Submit"];
    const [taskChecked,setTaskChecked]=useState([false,false,false,false,false,false]);
    useEffect(()=>{
        const tasksSelector = document.getElementById("Tasks");
        tasksSelector.style.setProperty('--Color', `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`);
    },[color])
    
    const handleChange=async(e,index)=>{
        var updated=[];
        for(var i=0;i<taskChecked.length;i++){
            if(i!==index)
                updated.push(taskChecked[i])
            else
                updated.push(e.target.checked)
        };
        setTaskChecked(updated);
    }
    return(
        <div id="Tasks">
            <div className="heading">Today's Task</div>
            <div className="tasks">
            {taskChecked[1]}
                {
                    Tasks.map((task,index)=>(
                    <div key={index} className={'task'} >
                        <input type="checkbox" onChange={e=>handleChange(e,index)} className="taskCheckbox"/> <label style={{position:'relative',color:taskChecked[index]===true?"var(--Color)":"white"}}><div style={{width:taskChecked[index]===true?"100%":"0%"}} className="strike"/>{task}</label>
                    </div>
                ))
                }
            </div>
        </div>
    )
}