import { ADD_ARTIST, REMOVE_ARTIST } from '../constants/artists';

export function artists(state = [], action) {
  console.log('REDUCER:artists state %o, action %o', state, action);
  switch (action.type) {
    case ADD_ARTIST:
      return [...state, action.artist];
    case REMOVE_ARTIST:
      return state.filter((el) => el !== artist);
    default:
      return state;
  }
}
