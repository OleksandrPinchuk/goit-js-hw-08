import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(timePlayd, 1000));

function timePlayd(evt) {
    localStorage.setItem(TIME, evt.seconds);
};

player.setCurrentTime(localStorage.getItem(TIME) || 0);