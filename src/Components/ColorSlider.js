import "./ColorSlider.css";
export default function ColorSlider({value,setValue}){
    const handleChange = (e) =>{
        var color = document.getElementById("colorSlider");
        color.style.setProperty('--SliderColor', `hsl(${value}, 100%, 50%)`);
        setValue([e.target.value,value[1],value[2]]);
    }
    
    return(
        <div id="ColorSlider">
            <input id="colorSlider" onChange={e=>handleChange(e)} type="range" value={value[0]} min={0} max={360}/>
        </div>
    )
}