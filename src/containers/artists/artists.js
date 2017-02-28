import m from 'mithril';
import { defaultMapStateToProps } from 'midux';

import { connect } from '../../store';
import { addArtist } from '../../actions/artists';

const artistList = (artists) => {
  console.log('Artists:artistList %o', artists);
  if (artists && artists.length > 0) {

    const artistsArray = artists.map((artist) => {
      return m('li', artist);
    });

    return m('ul', artistsArray);
  }
};

const Artists = {
  view(ctrl, props) {
    const { actions, artists } = props;
    console.log('Artists:view artists %o', artists);
    return m('.Artists', [
      m('h1', 'Artists'),
      artistList(artists),
      m('input', { type: 'text', onchange: m.withAttr('value', actions.addArtist) }, 'add an artist'),
      m('p',
        m('a', { href: '/', config: m.route }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default connect(defaultMapStateToProps, { addArtist })(Artists);
