import React from "react";
import EpisodeList from "./EpisodeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodeAction } from "../redux/actions";
import useFetchEpisodes from "../hooks/useFetchEpisodes";

const Home = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(state => state.episodes);

  useFetchEpisodes(dispatch);

  function handleClick(id) {
    dispatch(fetchEpisodeAction(id));
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
