import { FETCH_EPISODE, FETCH_EPISODES } from "./actions";

const initialState = {
  episodes: [],
  episode: {}
};

function appStore(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_EPISODES:
      return Object.assign({}, state, { episodes: action.payload });
    case FETCH_EPISODE:
      return Object.assign({}, state, { episode: action.payload });
    default:
      return state;
  }
}

export default appStore;
