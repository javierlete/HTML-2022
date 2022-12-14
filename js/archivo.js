'use strict';

// estructurasControl3();
// estructurasControl2();
// estructurasControl();
// planoAlumnos2();
// planoAlumnos();
// arrays();
// console.log(suma(15, 20));
// ejemplosBasicos();

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
