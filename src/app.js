import m from 'mithril';

import Things from './containers/things/things';
import Counter from './containers/counter/counter';
import Home from './containers/home/home';

m.route(document.body, '/', {
  '/': {
    render: () => {
      return m(Home);
    },
  },
  '/counter': {
    view: () => {
      return m(Counter);
    },
  },
  '/things': {
    render: () => {
      return m(Things);
    },
  },
});
