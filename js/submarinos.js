const NUMERO_FILAS = 4;
const NUMERO_COLUMNAS = 4;

const NUMERO_SUBMARINOS = 4;

const HUNDIDO = '*';
const AGUA = '~';
const INDETERMINADO = '?';
const SUBMARINO = '&';

let submarinosHundidos = 0;

const tablero = [];

function submarinos() {

    inicializar();

    rellenarConSubmarinos();

    do {
        hacerJugada();

        mostrarTablero();
    } while (submarinosHundidos < NUMERO_SUBMARINOS);

    console.log('¡Enhorabuena! Has hundido todos los submarinos');
}

function mostrarTablero() {
    for (let fila of tablero) {
        let filaVisual = '';

        for (let casilla of fila) {
            let casillaVisual = casilla;

            if (casilla == SUBMARINO) {
                casillaVisual = INDETERMINADO;
            }

            filaVisual += casillaVisual + ' ';
        }

        console.log(filaVisual);
    }
}

function hacerJugada() {
    let y = prompt('Dime la fila');
    let x = prompt('Dime la columna');

    if (tablero[y][x] == SUBMARINO) {
        console.log('Felicidades. Has hundido un submarino');

        tablero[y][x] = HUNDIDO;

        submarinosHundidos++;
    } else {
        console.log('Agua');

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
