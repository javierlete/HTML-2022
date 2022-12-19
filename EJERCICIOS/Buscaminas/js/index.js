const NUMERO_FILAS = 8;
const NUMERO_COLUMNAS = 8;
const NUMERO_MINAS = 8;

let explosion;

window.addEventListener('DOMContentLoaded', function () {
    const tablero = document.querySelector('#tablero');
    explosion = document.querySelector('#explosion');

    let boton;

    for (let y = 1; y <= NUMERO_FILAS; y++) {
        for (let x = 1; x <= NUMERO_COLUMNAS; x++) {
            boton = document.createElement('button');

            boton.style.gridColumnStart = x;
            boton.style.gridRowStart = y;

            boton.addEventListener('click', botonPulsado);

            tablero.appendChild(boton);
        }
    }

    const botones = document.querySelectorAll('#tablero > button');

    for (let i = 0; i < NUMERO_MINAS; i++) {
        botones[aleatorio(0, NUMERO_FILAS * NUMERO_COLUMNAS - 1)].dataset.contenido = '*';
    }
});

function botonPulsado() {
    this.style.visibility = 'hidden';

    const div = document.createElement('div');

    div.style.textAlign = 'center';
    div.style.verticalAlign = 'center';

    div.style.gridColumnStart = this.style.gridColumnStart;
    div.style.gridRowStart = this.style.gridRowStart;

    if (this.dataset.contenido === '*') {
        div.innerHTML = '*'
        explosion.play();
    } else {
        div.innerHTML = '~';
    }

    tablero.appendChild(div);

}