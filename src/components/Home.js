import React from "react";
import EpisodeList from "./EpisodeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes, fetchEpisode } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episodes);

  // eslint-disable-line
  React.useEffect(() => {
    fetch("http://api.tvmaze.com/shows/6771/episodes")
      .then(response => response.json())
      .then(episodes => dispatch(fetchEpisodes(episodes)))
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  function handleClick(id) {
    dispatch(fetchEpisode(id));
  }
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList episodes={episodes} onEpisodeClick={handleClick} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
};

export default Home;
