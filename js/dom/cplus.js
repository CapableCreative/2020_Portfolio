let mouseFade = document.getElementById('mouse');

setInterval( function() {

    mouseFade.style.opacity = '1.0';
    mouseFade.style.filter = 'blur(0px)';

}, 3000);