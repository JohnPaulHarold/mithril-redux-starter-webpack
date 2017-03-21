import m from 'mithril';
import { defaultMapStateToProps } from 'midux';

import { connect } from '../../store';
import { addThing, removeThing } from '../../actions/things';

const thingList = (things, vnode) => {
  console.log('ThingsContainer:thingList %o', things);
  const { actions } = vnode.attrs;

  if (things && things.length > 0) {
    const thingsArray = things.map((thing) => {
      return m('li', [
        m('p', thing),
        m('button', {onclick: () => {
          actions.removeThing(thing);
        }}, 'remove')
      ]);
    });

    return m('ul', thingsArray);
  }
};

const Things = {
  view(vnode) {
    console.log('Things:view vnode %o', vnode);
    const { actions, things } = vnode.attrs;
    console.log('Things:view things %o', things);
    return m('.Things', [
      m('h1', 'List of things'),
      thingList(things, vnode),
      m(
        'input',
        {
          type: 'text',
          placeholder: 'add something',
          onchange: m.withAttr('value', actions.addThing)
        },
        'add something'
      ),
      m('p',
        m('a', { href: '/', oncreate : m.route.link }, [
          'Home ', m('i.fa.fa-arrow-left'),
        ])
      ),
    ]);
  },
};

export default connect(defaultMapStateToProps, { addThing, removeThing })(Things);
