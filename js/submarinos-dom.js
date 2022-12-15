const NUMERO_FILAS = 4;
const NUMERO_COLUMNAS = 4;

const NUMERO_SUBMARINOS = 4;

const HUNDIDO = '*';
const AGUA = '~';
const INDETERMINADO = '?';
const SUBMARINO = '&';

let submarinosHundidos;

const tablero = [];

let tableroHTML;

let reiniciar;

window.addEventListener('DOMContentLoaded', () => {
    inicializar();
    rellenarConSubmarinos();
    mostrarTablero();

    reiniciar = document.querySelector('#reiniciar');

    reiniciar.addEventListener('click', function() {
        inicializar();
        rellenarConSubmarinos();
        mostrarTablero();
    });
});

function mostrarTablero() {
    let x;
    let y;

    tableroHTML = document.querySelector('#tablero');

    tableroHTML.innerHTML = '';

    y = 0;
    
    for (let fila of tablero) {

        x = 0;

        for (let casilla of fila) {
            
            let casillaVisual = casilla;

            if (casilla == SUBMARINO) {
                casillaVisual = INDETERMINADO;
            }

            const boton = document.createElement('button');

            boton.type = 'button';
            boton.innerHTML = casillaVisual;
            boton.dataset.x = x;
            boton.dataset.y = y;
            boton.style.height = '2em';
            boton.style.width = '2em';

            boton.addEventListener('click', (e) => {
                const botonPulsado = e.target;
                const coordenadas = botonPulsado.dataset;
                
                console.log(coordenadas.x, coordenadas.y);

                hacerJugada(coordenadas.y, coordenadas.x);

                mostrarTablero();

                if(submarinosHundidos >= NUMERO_SUBMARINOS) {
                    alert('Lo has conseguido');
                }
            });

            tableroHTML.appendChild(boton);
            
            x++;
        }

        y++;

        const br = document.createElement('br');

        tableroHTML.appendChild(br);        
    }
}

function hacerJugada(y, x) {
    if (tablero[y][x] == SUBMARINO) {
        tablero[y][x] = HUNDIDO;

        submarinosHundidos++;
    } else {
        tablero[y][x] = AGUA;
    }
}

function rellenarConSubmarinos() {
    for (let vez = 0; vez < NUMERO_SUBMARINOS; vez++) {
        const numeroFila = aleatorio(0, NUMERO_FILAS - 1);
        const numeroColumna = aleatorio(0, NUMERO_COLUMNAS - 1);

        if (tablero[numeroFila][numeroColumna] == SUBMARINO) {
            vez--;
        } else {
            tablero[numeroFila][numeroColumna] = SUBMARINO;
        }
    }
}

function inicializar() {
    submarinosHundidos = 0;

    for (let numeroFila = 0; numeroFila < NUMERO_FILAS; numeroFila++) {
        tablero[numeroFila] = [];

        for (let numeroColumna = 0; numeroColumna < NUMERO_COLUMNAS; numeroColumna++) {
            tablero[numeroFila][numeroColumna] = INDETERMINADO;
        }
    }
}

function aleatorio(desde, hasta) {
    const numero = Math.random() * (hasta - desde);

    return Math.round(numero) + desde;
}
