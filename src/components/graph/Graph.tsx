import {useRef,useEffect} from "react"
import { drawChart } from "./graphLogic"

function Graph() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            drawChart(canvas, 5);
        }
    }, []);

    return (
        <> 
            <div className="graph">
                <div className="content-width">
                <canvas ref={canvasRef} width="600" height="400"/>
                </div>
            </div>
        </>
        )
  }
  
  export default Graph