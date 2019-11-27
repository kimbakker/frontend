function uitklapMenu() {
    document.querySelector('.menu-categorie').classList.toggle('uitklapeffect1');
}

document.querySelector('.categorie-titel').addEventListener("click", uitklapMenu);
