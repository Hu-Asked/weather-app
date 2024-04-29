import SearchBar from "./SearchBar"
import {useEffect, useState} from "react"
import "./Body.css"
import 'isomorphic-fetch'   
const Body = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [location, setLocation] = useState("")
    const [data, setData] = useState(null)
    const [image, setImage] = useState("");

    const saveLocation = (input) => {
        setLocation(input)
    }
    useEffect(() => {
        if(location) {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert("Please enter a valid location");
                    setLocation("");
                } else {
                    setData(data);
                    if(data.current.condition.text.includes("Sunny")) {
                        setImage("/images/sunny.jpg")
                    } else if(data.current.condition.text.includes("snow") || data.current.condition.text.includes("sleet") || data.current.condition.text.includes("   ")) {
                        setImage("/images/snowy.jpg")
                    } else if(data.current.condition.text.includes("thunder")) {
                        setImage("/images/stormy.jpg")
                    } else if(data.current.condition.text.includes("rain")) {
                        setImage("/images/rainy.jpg")
                    } else {
                        setImage("/images/cloudy.jpg")
                    }
                }
            })
            .catch(error => console.log('Error fetching data: ', error));
        }
    }, [location]);

    return (
        <div className="body" style={{backgroundImage: `url(${image})`}}>
            <SearchBar
            saveLocation={saveLocation}/>
            <h1 className="location">{location === "" ? "Location" : (data ? data.location.name : "")}</h1>
            <h2>{location === "" ? "" : (data ? data.location.country : "")}</h2>
            <div className="dataContainer">
                {data && <div className="data">
                    Temperature: {data.current.temp_c}°C <br />
                    Feels like: {data.current.feelslike_c}°C <br />
                    {data.current.condition.text} <br />
                    </div>} 
            </div>
        </div>
    )
}
export default Body;