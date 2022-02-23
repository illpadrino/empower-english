let imgMostrada = 'Burguermenu';

let imgLogo = 'logoConLetras';

function menu() {
    const elemento = document.querySelector('#menuDinamico');
    const elementoDos = document.querySelector('#logo')
    const ul = document.querySelector('ul');
    ul.classList.toggle('active');

    if (imgMostrada == 'Burguermenu' && imgLogo == 'logoConLetras') {
        elemento.src = './img/Close.svg';
        imgMostrada = 'Close';

        elementoDos.src = './img/Logo_sin_letras.svg';
        imgLogo = 'logoSinLetras';

    }else{
        elemento.src = './img/Burguermenu.svg';
        imgMostrada = 'Burguermenu';

        elementoDos.src = './img/Logo_mobile.svg';
        imgLogo = 'logoConLetras'
    }

}

const burguerMenu = document.querySelector('.burguerMenu');


burguerMenu.addEventListener('click', menu,);