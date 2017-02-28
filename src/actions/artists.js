import { ADD_ARTIST, REMOVE_ARTIST } from '../constants/artists';

export function addArtist(artist) {
  console.log('ACTION:addArtist %o', artist);
  return {
    type: ADD_ARTIST,
    artist: artist,
  };
}

export function removeArtist(artist) {
  console.log('ACTION:removeArtist %o', artist);
  return {
    type: REMOVE_ARTIST,
    artist: artist,
  };
}
