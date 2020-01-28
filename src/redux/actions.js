export const FETCH_EPISODES = "FETCH_EPISODES";
export const FETCH_EPISODE = "FETCH_EPISODE";

export function fetchEpisodes(episodes) {
  return {
    type: FETCH_EPISODES,
    payload: episodes
  };
}

export function fetchEpisode(link) {
  return dispatch => {
    fetch(link)
      .then(response => response.json())
      .then(episode => {
        dispatch({
          type: FETCH_EPISODE,
          payload: episode
        });
      });
  };
}
