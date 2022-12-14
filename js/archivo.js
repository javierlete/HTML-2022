'use strict';

submarinos();
// console.log(aleatorio(1, 10));
// estructurasControl3();
// estructurasControl2();
// estructurasControl();
// planoAlumnos2();
// planoAlumnos();
// arrays();
// console.log(suma(15, 20));
// ejemplosBasicos();

function submarinos() {
    const NUMERO_FILAS = 4;
    const NUMERO_COLUMNAS = 4;

    const NUMERO_SUBMARINOS = 4;

    const HUNDIDO = '*';
    const AGUA = '~';
    const INDETERMINADO = '?';
    const SUBMARINO = '&';

    let submarinosHundidos = 0;

    const tablero = [];

    // Inicialización del tablero a indeterminados
    for (let numeroFila = 0; numeroFila < NUMERO_FILAS; numeroFila++) {
        tablero[numeroFila] = [];

        for (let numeroColumna = 0; numeroColumna < NUMERO_COLUMNAS; numeroColumna++) {
            tablero[numeroFila][numeroColumna] = INDETERMINADO;
        }
    }

    // Rellenar con submarinos
    for (let vez = 0; vez < NUMERO_SUBMARINOS; vez++) {
        const numeroFila = aleatorio(0, NUMERO_FILAS - 1);
        const numeroColumna = aleatorio(0, NUMERO_COLUMNAS - 1);

        if(tablero[numeroFila][numeroColumna] == SUBMARINO) {
            vez--;
        } else {
            tablero[numeroFila][numeroColumna] = SUBMARINO;
        }
    }

    do {
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

        // Mostrar tablero
        for (let fila of tablero) {
            let filaVisual = '';

            for (let casilla of fila) {
                let casillaVisual = casilla;
                
                if(casilla == SUBMARINO) {
                    casillaVisual = INDETERMINADO;
                }

                filaVisual += casillaVisual + ' ';
            }

            console.log(filaVisual);
        }
    } while (submarinosHundidos < NUMERO_SUBMARINOS);

    console.log('¡Enhorabuena! Has hundido todos los submarinos');
}

function aleatorio(desde, hasta) {
    const numero = Math.random() * (hasta - desde);

    return Math.round(numero) + desde;
}

function estructurasControl3() {
    const plano = [
        [undefined, 'Lucas', 'Samantha'],
        ['Pedro'],
        ['Christian', 'Daniela', 'Miguel'],
        ['Irune', 'Gorka', 'Unai'],
        ['Marcel', 'Abigail']
    ];

    console.log(plano);

    for (let fila = 0; fila < plano.length; fila++) {
        console.log(plano[fila][0], plano[fila][1], plano[fila][2]);
    }

    for (let numeroFila = 0; numeroFila < plano.length; numeroFila++) {
        let fila = plano[numeroFila];

        for (let numeroMesa = 0; numeroMesa < fila.length; numeroMesa++) {
            let alumno = fila[numeroMesa];

            if (alumno) {
                console.log(alumno);
            }
        }
    }

    // ES2015
    for (let fila of plano) {
        for (let alumno of fila) {
            if (alumno) {
                console.log(alumno);
            }
        }
    }
}

function estructurasControl2() {
    const res = prompt('Elige un número');

    const num = parseInt(res);

    switch (num) {
        case 1:
            console.log('UNO');
            break;
        case 2:
            console.log('DOS');
            break;
        default:
            console.log('OTRO')
    }

    let repetir, contador = 1;

    do {
        console.log(contador++);

        repetir = prompt('¿Quieres repetir? (si/no)');
    } while (repetir === 'si');

    // for(inicialización; condición de permanencia; antes de volver a repetir)
    for (let c = 1; c <= 10; c++) {
        console.log(c);
    }

    let c = 1;
    while (c <= 10) {
        console.log(c);
        c++;
    }
}

function estructurasControl() {
    const siONo = confirm('¿Estás seguro?');

    if (siONo) {
        console.log('Me alegro de que estés seguro');
    } else {
        console.log('Bueno, entonces no te molesto más');
    }

    let repetir = 'si';
    let contador = 1;

    while (repetir === 'si') {
        console.log(contador++);

        repetir = prompt('¿Quieres repetir? (si/no)');
    }

    console.log('Pues ahora voy a contar de uno a diez');

    contador = 1;

    while (contador <= 10) {
        console.log(contador++);
    }
}

function planoAlumnos2() {
    const plano = [
        ['Hugo', 'Lucas', 'Samantha'],
        ['Pedro', 'Maitane', 'Alejandro'],
        ['Christian', 'Daniela', 'Miguel'],
        ['Irune', 'Gorka', 'Unai'],
        ['Marcel', 'Abigail', 'Teo']
    ];

    const fila = prompt('Dime fila') - 1;
    const mesa = prompt('Dime mesa') - 1;

    console.log(plano[fila][mesa]);
}

function planoAlumnos() {
    const plano = [
        'Hugo', 'Lucas', 'Samantha',
        'Pedro', 'Maitane', 'Alejandro',
        'Christian', 'Daniela', 'Miguel',
        'Irune', 'Gorka', 'Unai',
        'Marcel', 'Abigail', 'Teo'
    ];

    const posicion = prompt('Dime qué posición quieres ver');
    console.log(plano[posicion]);
}

function arrays() {
    const arr = [];

    arr[0] = 5;
    arr[1] = 7;
    arr[2] = 9;

    arr[3] = 10;
    arr[6] = 2;
    arr[5] = 'asdfasdf';

    arr.push('último');

    arr['casa'] = 'house';
    arr.perro = 'dog';

    console.log(arr, arr.length);

    console.log(arr[7]);
    console.log(arr[4], typeof arr[4]);

    console.log(arr.casa);
    console.log(arr['perro']);
}

function suma(a, b) {
    return a + b;
}

function ejemplosBasicos() {
    // Ejemplo básico de comentario de línea
    console.log('hola');

    /*
    Comentario
    multi
    línea
    */

    alert('YOOO');

    const sino = confirm('¿Estás seguro?');

    const nombre = prompt('Introduce un texto');

    console.log('SI/NO', sino, typeof sino);
    console.log('Nombre', nombre, typeof nombre);

    console.log('Hola ' + nombre);

    console.log(5 * 3);
}
