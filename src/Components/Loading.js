import "./Loading.css";

export default function Loading({color}){
    return(
        <div className="Loading">
            <div style={{width:"15px",height:"15px",borderColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}} className="loadRing"/>
            <div style={{width:"30px",height:"30px",borderColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}} className="loadRing"/>
            <div style={{width:"50px",height:"50px",borderColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}} className="loadRing"/>
            <div style={{width:"70px",height:"70px",borderColor:`hsl(${color[0]},${color[1]}%,${color[2]}%)`}} className="loadRing"/>
            <div className="loadingContainer">
                
                <div className="loading" style={{background:`linear-gradient(hsla(${color[0]},${color[1]}%,${color[2]}%,0%),hsla(${color[0]},${color[1]}%,${color[2]}%,100%) 30%)`}}/>
            </div>
        </div>
    )
}