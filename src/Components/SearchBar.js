import './SearchBar.css'

const SearchBar = (props) => {

    const handleChange = (event) => {
        if(event.key === "Enter"){
            props.saveLocation(event.target.value)
        }
    }

    return(
        <input type="text" id="location" onKeyDown={handleChange}/>
    );
}
export default SearchBar;