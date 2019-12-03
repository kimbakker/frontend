/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

function uitklapMenu() {
    document.querySelector('.menu-categorie').classList.toggle('uitklapeffect1');
    document.querySelector('.fa-chevron-down').classList.toggle('fa-rotate-180');
}

document.querySelector('.categorie-titel').addEventListener("click", uitklapMenu);

function uitklapMenuMuziek() {
    document.querySelector('.menu-categorie-muziek').classList.toggle('uitklapeffect2');
    document.querySelector('.sub').classList.toggle('fa-rotate-180');
}

document.querySelector('.muziek').addEventListener("click", uitklapMenuMuziek);



//https://codepen.io/bav/pen/opvMmx
//var options
//
//options = {
//    autoplay: true,
//    muted: true
//}
//video = videojs('video-1', options);



//http://cmd.camp/2017%20javascript/front-end%20coding/4-extra-tips-2
//Docent Koen GLU
var favoriet = document.querySelector('.fave');

function like() {
    favoriet.setAttribute('src', 'images/hartje-rood.png');
}

favoriet.addEventListener('click', like);


