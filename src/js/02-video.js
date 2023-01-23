import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    // data is an object containing properties specific to that event

    localStorage.setItem(
      VIDEOPLAYER_CURRENT_TIME,
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME))
  .then(function () {
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
