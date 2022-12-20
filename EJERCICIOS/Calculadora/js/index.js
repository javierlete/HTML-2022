const etiquetas = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', ',', '='
];

let display;
let operacion;
let operando1;
let operando2;

window.addEventListener('DOMContentLoaded', function () {
    const botonera = document.querySelector('#botonera');
    display = document.querySelector('#display');

    for (let etiqueta of etiquetas) {
        const boton = document.createElement('button');
        boton.innerText = etiqueta;

        boton.addEventListener('click', botonPulsado);

        switch (etiqueta) {
            case '0':
                boton.style.gridColumnEnd = 'span 2';
                break;
            case 'AC':
            case '+/-':
            case '%':
                boton.style.backgroundColor = 'darkgray';
                break;
            case '/':
            case '*':
            case '-':
            case '+':
            case '=':
                boton.style.backgroundColor = '#ffcc00';
                break;
        }

        botonera.appendChild(boton);
    }
});

function botonPulsado(e) {
    const boton = e.target;

    if (boton.innerText >= '0' && boton.innerText <= '9') {
        display.value += boton.innerText;
    } else {

        switch (boton.innerText) {
            case ',':
                display.value += boton.innerText;
                break;
            case 'AC':
                display.value = '';
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                operando1 = parseFloat(display.value);
                operacion = boton.innerText;
                display.value = '';
                break;
            case '=':
                operando2 = parseFloat(display.value);

                display.value = eval(operando1 + operacion + operando2);
                break;
        }
    }
}