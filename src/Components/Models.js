import "./Models.css";
import down from "../resources/Down.svg";
import { useEffect, useState } from "react";

export default function Models({color}){
    const models=[
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',img:"gpt",contributors:['user11','user12','user13']},
        {name:"TensorFlow",Version:"v1.1",licence:"MIT",rating:3,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user21','user22'],img:'tf'},
        {name:"Bard",Version:"v0.5",licence:"Private",rating:3,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user31'],img:"bard"},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user41','user42','user43']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user41','user42','user43']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user41','user42','user43']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user41','user42','user43']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['user41','user42','user43']}
    ]
    const popOptions=["All",'UI/UX Design','Frontend','Backend','Full Stack','Graphic Designer',"Web Developer",'QA'];
    const [popChecks1,setPopChecks1]=useState(Array(popOptions.length).fill(false));
    const [popChecks2,setPopChecks2]=useState(Array(popOptions.length).fill(false));
    const [popChecks3,setPopChecks3]=useState(Array(popOptions.length).fill(false));
    const [modelOpen,setModelOpen]=useState(Array(models.length).fill(false));
    const handleChange=(e,index,setPopChecks,popChecks)=>{
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
    const handleOpen=(index)=>{
        var updated=[];

        for(var i=0;i<popOpen.length;i++){
            if(i!==index)
                updated.push(false)
            else
                updated.push(!popOpen[i])
        };
        setPopOpen(updated);
    }
    const handleModelOpen=(index)=>{
        var updated=[];
        for(var i=0;i<modelOpen.length;i++){
            if(i!==index)
                updated.push(false)
            else
                updated.push(!modelOpen[i])
        };
        setModelOpen(updated);
    }
    const [popOpen,setPopOpen]=useState(Array(3).fill(false));
    useEffect(()=>{
        const popSelector = document.getElementById("Models");
        popSelector.style.setProperty('--Color', `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`);
    },[color])
    return(
        <div id="Models">
            <div className="header">
                <div className="heading">AI Models </div>
                <div className="options">
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(0)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[0]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}}>
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className='popOption' >
                                <input type="checkbox" checked={popChecks1[index]} onChange={e=>handleChange(e,index,setPopChecks1,popChecks1)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(1)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[1]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}} >
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className={'popOption'} >
                                <input type="checkbox" checked={popChecks2[index]} onChange={e=>handleChange(e,index,setPopChecks2,popChecks2)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(2)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[2]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}}>
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className={'popOption'} >
                                <input type="checkbox" checked={popChecks3[index]} onChange={e=>handleChange(e,index,setPopChecks3,popChecks3)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                <div className="fieldNames">
                    <div className="fieldName">Model</div>
                    <div className="fieldName">Versions</div>
                    <div className="fieldName">Licences</div>
                    <div className="fieldName">Contributors</div>
                    <div className="fieldName">Rating</div>
                </div>
            </div>
            <div className="content">
                {models.map((model,index)=>(
                    <div key={index}>
                    <div className="model" onClick={()=>handleModelOpen(index)}>
                        <div className="modelInfo"><div className="logo">{model.img!==undefined?<img src={require(`../resources/${model.img}.png`)} className="logoImg" alt='logo'/>:null}</div><div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>{model.name}</div></div>
                        <div className="modelInfo">{model.Version}</div>
                        <div className="modelInfo">{model.licence}</div>
                        <div className="modelInfo" style={{justifyContent:'end'}}>
                            {model.contributors.map((img,index)=>(
                                <img src={require(`../resources/UserImages/${img}.png`)} key={index} className="contributorImg" alt='contributor'/>
                            ))}
                        </div>
                        <div className="modelInfo">
                            {Array(model.rating).fill().map((d,index)=>    
                                <svg width="18" key={index} height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill={`hsl(${color[0]},${color[1]}%,${color[2]}%`} />
                                </svg>
                            )
                            }
                            {Array(5-model.rating).fill().map((d,index)=>    
                                <svg width="18" key={index} height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#17171A"/>
                                </svg>
                            )
                            }
                        </div>
                        </div>
                            <div id="modelExt" style={{gridTemplateRows:modelOpen[index]?"1fr":"0fr",padding:modelOpen[index]?"30px":"0px 30px"}}>
                            <div className="modelExt">{model.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}