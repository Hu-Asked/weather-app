import { useRef } from "react";
import "./Options.css";

const Options = (props) => {
    const handleClick = () => {
        const options = [
            "Temp_C",
            "Temp_F",
            "FeelsLike_C",
            "FeelsLike_F",
            "Precipitation_mm"
        ];
        options.forEach(id => {
            const option = document.getElementById(id);
            props.saveOptions(id, option.checked);
        });
    }
    return(
        <div className="options">
           <h1>Options</h1>
           <form>
                <input type="checkbox" id="Temp_C"/>
                <label htmlFor="Temp_C">Temperature (°C)</label> <br />
                <input type="checkbox" id="Temp_F"/>
                <label htmlFor="Temp_F">Temperature (°F)</label> <br />
                <input type="checkbox" id="FeelsLike_C"/>
                <label htmlFor="FeelsLike_C">Feels Like (°C)</label> <br />
                <input type="checkbox" id="FeelsLike_F"/>
                <label htmlFor="FeelsLike_F">Feels Like (°F)</label> <br />
                <input type="checkbox" id="Precipitation_mm"/>
                <label htmlFor="Precipitation_mm">Precipitation (mm)</label> <br />
                <button type="submit" onClick={handleClick}>Save</button>
           </form>      
        </div>
    );
}

export default Options;