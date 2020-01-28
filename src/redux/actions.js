export const FETCH_EPISODES = "FETCH_EPISODES";
export const FETCH_EPISODE = "FETCH_EPISODE";

export function fetchEpisodesAction(episodes) {
  return {
    type: FETCH_EPISODES,
    payload: episodes
  };
}

export function fetchEpisodeAction(link) {
  return dispatch => {
    fetch(link)
      .then(response => response.json())
      .then(episode => {
        dispatch({
          type: FETCH_EPISODE,
          payload: episode
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
