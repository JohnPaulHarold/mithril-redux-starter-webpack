import { configureStore, connectStore } from 'midux';
import thunk from 'redux-thunk';

import { count } from './reducers/counter';
import { page } from './reducers/page';
import { things } from './reducers/things';


const middleware = [
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-logger')()); // eslint-disable-line
}

export const store = configureStore({
  page,
  count,
  things,
}, middleware);

export const connect = connectStore(store);
