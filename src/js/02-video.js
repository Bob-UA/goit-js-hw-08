import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');


const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
};


fromSavedTime();
function fromSavedTime() {
  if (currentTime) {
player.setCurrentTime(currentTime); 
  }
}

player.on('timeupdate', trottle(onPlay, 1000));