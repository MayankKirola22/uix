import "./ColorShades.css";

export default function ColorShades({setValue,value}){
    function handleClick(lightness){
        setValue([value[0],value[1],lightness])
    }
    return(
        <div className="ColorShades">
            <div className="shade" onClick={()=>handleClick(95)} style={{backgroundColor:`hsl(${value[0]},100%,95%)`}}/>
            <div className="shade" onClick={()=>handleClick(91)} style={{backgroundColor:`hsl(${value[0]},100%,91%)`}}/>
            <div className="shade" onClick={()=>handleClick(84)} style={{backgroundColor:`hsl(${value[0]},100%,84%)`}}/>
            <div className="shade" onClick={()=>handleClick(75)} style={{backgroundColor:`hsl(${value[0]},100%,75%)`}}/>
            <div className="shade" onClick={()=>handleClick(65)} style={{backgroundColor:`hsl(${value[0]},100%,65%)`}}/>
            <div className="shade" onClick={()=>handleClick(58)} style={{backgroundColor:`hsl(${value[0]},100%,58%)`}}/>
            <div className="shade" onClick={()=>handleClick(52)} style={{backgroundColor:`hsl(${value[0]},100%,52%)`}}/>
            <div className="shade" onClick={()=>handleClick(42)} style={{backgroundColor:`hsl(${value[0]},100%,42%)`}}/>
            <div className="shade" onClick={()=>handleClick(35)} style={{backgroundColor:`hsl(${value[0]},100%,35%)`}}/>
            <div className="shade" onClick={()=>handleClick(23)} style={{backgroundColor:`hsl(${value[0]},100%,23%)`}}/>
        </div>
    )
}