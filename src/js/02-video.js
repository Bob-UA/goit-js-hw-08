import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
  console.log(localStorage.getItem('videoplayer-current-time'));
  return localStorage.getItem('videoplayer-current-time');
};





player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', onPlay);