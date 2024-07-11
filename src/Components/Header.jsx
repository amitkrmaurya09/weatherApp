import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const handleClick = () => {
    const inputValue = document.getElementById("inputValue");
    console.log(inputValue.value);
    inputValue.innerText = "";
  };

  return (
    <div className="header">
      <div>
        <img src="../../images/weather-1405870_1280.png" width="70px" />
      </div>
      <div className="input">
        <input
          id="inputValue"
          placeholder="Search by City or zipcode"
          type="text"
        />
        <SearchIcon
          className="searchIcon"
          fontSize="large"
          onClick={handleClick}
        />
      </div>
      <div className="info">
        <h3>About </h3>
      </div>
    </div>
  );
}

export default Header;
