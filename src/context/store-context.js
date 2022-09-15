import React from "react";

const initialState = {
  players: [], // player list array
  getPlayers: () => {}, // get players from the api
  searchPlayers: () => {},
  isLoading: false,
  error: null,
};

const StoreContext = React.createContext(initialState);

export default StoreContext;
