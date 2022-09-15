import { useCallback, useState } from "react";
import useHttp from "../hooks/use-http";
import { transformDate, searchPlayers } from "../Utils/helper";
import StoreContext from "./store-context";

const StoreProvider = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  const [players, setPlayers] = useState([]);

  // Get players from the api.
  // Set response from api with the hook.
  const getPlayersHandler = useCallback(async () => {
    await sendRequest(
      {
        url: "https://api.npoint.io/20c1afef1661881ddc9c",
        headers: { "Content-Type": "application/json" },
      },
      (dataIn) => {
        if (!error) {
          dataIn.playerList.forEach((player) => {
            player.UpComingMatchesList[0].MDate = transformDate(
              player.UpComingMatchesList[0].MDate
            );
          });

          dataIn.playerList = dataIn.playerList.sort((playerA, playerB) => {
            if (parseInt(playerA.Value) > parseInt(playerB.Value)) {
              return 1;
            } else {
              return -1;
            }
          });

          setPlayers(dataIn.playerList);
        } else {
          setPlayers([]);
        }
      }
    );
  }, [error, sendRequest]);

  // Search from the players array based of the keyword received.
  const searchPlayersHandler = useCallback(
    (keyword) => {
      const results = searchPlayers(players, keyword);

      setPlayers(results);
    },
    [players]
  );

  const storeContext = {
    players: players,
    getPlayers: getPlayersHandler,
    searchPlayers: searchPlayersHandler,
    isLoading: isLoading,
    error: error,
  };

  return (
    <StoreContext.Provider value={storeContext}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
