import m from 'mithril';

import Artists from './containers/artists/artists';
import Counter from './containers/counter/counter';
import Home from './containers/home/home';

m.route.mode = 'hash';

m.route(document.getElementById('app'), '/',
  {
    '/': m(Home),
    '/counter': m(Counter),
    '/artists': m(Artists),
  }
);
