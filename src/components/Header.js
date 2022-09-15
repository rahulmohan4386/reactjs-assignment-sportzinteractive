import { useContext, useRef } from "react";
import StoreContext from "../context/store-context";

const Header = () => {
  const inputRef = useRef(null);

  const { searchPlayers, getPlayers } = useContext(StoreContext);

  // Search for players.
  const onSearchPlayers = ($event) => {
    $event.preventDefault();

    const keyword = inputRef.current.value;
    if (keyword !== "") {
      searchPlayers(keyword); // search for players based on keyword received.
    } else {
      getPlayers(); // Reset player list if user delete the search query.
    }
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <a className="navbar-brand" href="/">
          Sportz Interactive
        </a>
        <form className="d-flex">
          <input
            ref={inputRef}
            className="form-control me-2"
            type="search"
            placeholder="Search for Players"
            aria-label="Search"
            onChange={onSearchPlayers}
          />
          <button
            onClick={onSearchPlayers}
            className="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
