import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
function Header(props) {
  const [input, setInput] = useState("");

  

  const handleClick = () => {
    console.log(input);
    props.weatherData(input);
    console.log("up to this is correct............!")
    setInput("");
  };

 function handleChange(event){
    const inputVal = event.target.value;
    setInput(inputVal);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };
  return (
    <div className="header">
      <div>
        <img src="./images/weather-1405870_1280.png" width="70px" />
      </div>
      <div className="input">
        <input
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        id="inputValue"
        placeholder="Search by City Name"
        type="text"
        />
        <SearchIcon
          className="searchIcon"
          fontSize="large"
          onClick={handleClick}
          />
      </div>
      <div className="info">
      <a href="#About"><h3 style={{color: "black"}}>About</h3></a>
      </div>
    </div>
  );
}

export default Header;
