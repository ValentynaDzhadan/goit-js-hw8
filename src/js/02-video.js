import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeElem = document.querySelector('iframe');
const player = new Player(iframeElem);

console.log(player);

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
