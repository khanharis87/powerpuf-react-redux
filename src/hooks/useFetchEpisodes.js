import React from "react";
import { fetchEpisodesAction } from "../redux/actions";

export default function useFetchEpisodes(dispatch) {
  React.useEffect(() => {
    fetch("http://api.tvmaze.com/shows/6771/episodes")
      .then(response => response.json())
      .then(episodes => dispatch(fetchEpisodesAction(episodes)))
      .catch(function(error) {
        console.log(error);
      });
  }, []);
}
