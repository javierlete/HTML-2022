'use strict';

estructurasControl();

// planoAlumnos2();
// planoAlumnos();
// arrays();
// console.log(suma(15, 20));
// ejemplosBasicos();

function estructurasControl() {
    const siONo = confirm('¿Estás seguro?');

    if(siONo) {
        console.log('Me alegro de que estés seguro');
    } else {
        console.log('Bueno, entonces no te molesto más');
    }

    let repetir = 'si';
    let contador = 1;

    while(repetir === 'si') {
        console.log(contador++);

        repetir = prompt('¿Quieres repetir? (si/no)');
    }

    console.log('Pues ahora voy a contar de uno a diez');

    contador = 1;

    while(contador <= 10) {
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

    const fila = prompt('Dime fila') - 1 ;
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
