const NUMERO_FILAS = 8;
const NUMERO_COLUMNAS = 8;
const NUMERO_MINAS = 8;

const VACIO = '~';
const MINA = '*';
const EXPLOSION = '*';

let explosion;
const botones = [];

const mapa = [];
for (let y = 0; y < NUMERO_FILAS + 2; y++) {
    mapa[y] = [];

    for (let x = 0; x < NUMERO_COLUMNAS + 2; x++) {
        mapa[y][x] = VACIO;
    }
}

for (let i = 0; i < NUMERO_MINAS; i++) {
    const x = aleatorio(1,8);
    const y = aleatorio(1,8);

    if(mapa[y][x] === MINA) {
        i--;
    } else {
        mapa[y][x] = MINA;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    const tablero = document.querySelector('#tablero');
    explosion = document.querySelector('#explosion');

    let boton;

    for (let y = 1; y <= NUMERO_FILAS; y++) {
        botones[y] = [];

        for (let x = 1; x <= NUMERO_COLUMNAS; x++) {
            boton = document.createElement('button');

            boton.style.gridColumnStart = x;
            boton.style.gridRowStart = y;

            boton.addEventListener('click', botonPulsado);

            tablero.appendChild(boton);

            botones[y][x] = boton;
        }
    }
});

function botonPulsado(e) {
    const boton = e.target
    boton.style.visibility = 'hidden';
    
    const x = parseInt(boton.style.gridColumnStart);
    const y = parseInt(boton.style.gridRowStart);

    const div = document.createElement('div');

    div.style.textAlign = 'center';
    div.style.verticalAlign = 'center';

    div.style.gridColumnStart = x;
    div.style.gridRowStart = y;

    if (mapa[y][x] === MINA) {
        div.innerHTML = EXPLOSION;
        explosion.play();
    } else {
        div.innerHTML = visualizarPistas(x, y);
    }

    tablero.appendChild(div);
}

function visualizarPistas(x, y) {
    let minas = 0;

    for (let minasY = y - 1; minasY <= (y + 1); minasY++) {
        for (let minasX = x - 1; minasX <= (x + 1); minasX++) {
            if (mapa[minasY][minasX] === MINA) {
                minas++;
            }
        }
    }

    return minas ? minas : ' ';
}