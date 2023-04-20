import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(func, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});