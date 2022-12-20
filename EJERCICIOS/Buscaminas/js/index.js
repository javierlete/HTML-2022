const NUMERO_FILAS = 8;
const NUMERO_COLUMNAS = 8;
const NUMERO_MINAS = 8;

const VACIO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
const MINA = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M344 24V168c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM192 320c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32v32H192V320zm-77.3 90.5c8.1-16.3 24.8-26.5 42.9-26.5H482.3c18.2 0 34.8 10.3 42.9 26.5l27.6 55.2C563.5 487 548 512 524.2 512H115.8c-23.8 0-39.3-25-28.6-46.3l27.6-55.2zM36.3 138.3c7.5-10.9 22.5-13.6 33.4-6.1l104 72c10.9 7.5 13.6 22.5 6.1 33.4s-22.5 13.6-33.4 6.1l-104-72c-10.9-7.5-13.6-22.5-6.1-33.4zm534.1-6.1c10.9-7.5 25.8-4.8 33.4 6.1s4.8 25.8-6.1 33.4l-104 72c-10.9 7.5-25.8 4.8-33.4-6.1s-4.8-25.8 6.1-33.4l104-72z"/></svg>';
const EXPLOSION = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M499.6 11.3c6.7-10.7 20.5-14.5 31.7-8.5s15.8 19.5 10.6 31L404.8 338.6c2.2 2.3 4.3 4.7 6.3 7.1l97.2-54.7c10.5-5.9 23.6-3.1 30.9 6.4s6.3 23-2.2 31.5l-87 87H378.5c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64H117.8L42.3 363.7c-9.7-6.7-13.1-19.6-7.9-30.3s17.4-15.9 28.7-12.4l97.2 30.4c3-3.9 6.1-7.7 9.4-11.3L107.4 236.3c-6.1-10.1-3.9-23.1 5.1-30.7s22.2-7.5 31.1 .1L246 293.6c1.5-.4 3-.8 4.5-1.1l13.6-142.7c1.2-12.3 11.5-21.7 23.9-21.7s22.7 9.4 23.9 21.7l13.5 141.9L499.6 11.3zM64 448v0H512v0h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64zM288 0c13.3 0 24 10.7 24 24V72c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.3 10.7-24 24-24z"/></svg>';

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

    div.style.margin = 'auto';

    div.style.gridColumnStart = x;
    div.style.gridRowStart = y;

    const altura = 'calc(100vh/' + (NUMERO_FILAS + 2) + ')';
    
    if (mapa[y][x] === MINA) {
        div.innerHTML = EXPLOSION;
        div.style.height = '75%';
        div.style.width = '75%';
        explosion.play();
    } else {
        div.style.fontSize = altura;
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

    return minas ? minas : VACIO;
}