import { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Screens/Home';
function App() {
  const ref=useRef(null);
  const [Color,setColor]=useState([239,85,67]);
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return windowDimensions;
  }
  const { height,width } = useWindowDimensions();
  useEffect(()=>{
    let zoomLevel=Math.min((width/1500)*100,100);
      document.body.style.zoom = `${zoomLevel}%`;
      let app=ref.current;
      app.style.minHeight=`${(100/zoomLevel)*height}px`;
  }
  ,[width,height])
  return (
    <div className="App" style={{backgroundColor:`hsl(${Color[0]},${Color[1]}%,${Color[2]}%)`}}ref={ref}>
      <Home color={Color} setColor={setColor}/>
    </div>
  );
}

export default App;
