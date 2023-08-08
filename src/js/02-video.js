import Vimeo from '@vimeo/player'
       
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);


player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
    console.log( data.seconds);
       
};

player.on('timeupdate', onPlay);

    