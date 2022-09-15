import { useContext, useEffect } from "react";
import PlayerCard from "../components/PlayerCard";
import StoreContext from "../context/store-context";
import Loader from "../components/Loader";

const Home = () => {
  const { getPlayers, players, isLoading, error } = useContext(StoreContext);

  useEffect(() => {
    getPlayers(); // Get players list from the api.
  }, [getPlayers]);

  return (
    <section className="mt--50 vh-100">
      <div className="container">
        <h1>Players Lists</h1>
        <hr />
        <div className="row mt--50">
          {/* Loader */}
          {isLoading && !error && (
            <div className="col-12 d-flex justify-content-center text-center">
              <Loader />
            </div>
          )}
          {/* Error Message */}
          {!isLoading && error && <div>Sorry! Something went wrong.</div>}
          {/* Players Lists */}
          {!isLoading &&
            players.length > 0 &&
            players.map((player) => (
              <div key={player.Id} className="col-12 col-md-6 col-lg-3 mb-5">
                <PlayerCard
                  id={player.Id}
                  PFName={player.PFName}
                  SkillDesc={player.SkillDesc}
                  value={player.Value}
                  CCode={player.UpComingMatchesList[0].CCode}
                  VsCCode={player.UpComingMatchesList[0].VsCCode}
                  nextMatchTime={player.UpComingMatchesList[0].MDate}
                />
              </div>
            ))}
          {/* Empty List */}
          {!isLoading && !error && players.length <= 0 && (
            <h4 className="mt--50 text-center">Sorry! No results found.</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
