import { ADD_THING, REMOVE_THING } from '../constants/things';

export function things(state = [], action) {
  console.log('REDUCER:things state %o, action %o', state, action);
  switch (action.type) {
    case ADD_THING:
      return [...state, action.thing];
    case REMOVE_THING:
      return state.filter((el) => el !== action.thing);
    default:
      return state;
  }
}
