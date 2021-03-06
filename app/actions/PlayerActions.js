import Dispatcher from '../Dispatcher';
import {PLAY_STREAM, PLAY_SOUNDCLOUD, STOP_SOUNDCLOUD, PAUSE, PLAY} from '../constants';

Dispatcher.register(console.log.bind(console))

export default {
  playStream() {
    Dispatcher.dispatch({
      actionType: PLAY_STREAM
    });
  },

  playSoundcloud(url) {
    Dispatcher.dispatch({
      actionType: PLAY_SOUNDCLOUD,
      url: url
    });
  },

  stopSoundcloud() {
    Dispatcher.dispatch({
      actionType: STOP_SOUNDCLOUD
    })
  },

  pause() {
    Dispatcher.dispatch({
      actionType: PAUSE
    });
  },

  play() {
    Dispatcher.dispatch({
      actionType: PLAY
    });
  }
}
