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
var options

options = {
  autoplay: true,
  muted: true
}
video = videojs('video-1', options);




