import m from 'mithril';

import { connect } from '../../store';
import { updateTitle } from '../../actions/page';
import mReduxImage from '../../img/m-redux.png';

console.log('HOME:');

const Home = {
  view(vnode) {
    console.log('HOME: vnode %o', vnode);
    const { title, actions } = props;

    return m('.Home', [
      m('img', { src: mReduxImage, alt: 'Mithril Redux' }),
      m('h1', title),
      m('input', {
        oninput: (e) => actions.updateTitle(e.target.value),
        value: title,
      }),
      m('p',
        m('a', { href: '/counter', config: m.route }, [
          'Counter ', m('i.fa.fa-arrow-right'),
        ]),
        m('a', { href: '/artists', config: m.route }, [
          'Artists ', m('i.fa.fa-arrow-right'),
        ])
      ),
    ]);
  },
};

export default connect(state => state.page, { updateTitle })(Home);
