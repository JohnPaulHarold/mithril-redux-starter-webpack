import { ADD_THING, REMOVE_THING } from '../constants/things';

export function addThing(thing) {
  console.log('ACTION:addThing %o', thing);
  return {
    type: ADD_THING,
    thing: thing,
  };
}

export function removeThing(thing) {
  console.log('ACTION:removeThing %o', thing);
  return {
    type: REMOVE_THING,
    thing: thing,
  };
}
