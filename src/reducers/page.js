import { UPDATE_TITLE } from '../constants/page';

export function page(state = {}, action) {
  console.log('REDUCER:page state %o, action %o', state, action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
}
