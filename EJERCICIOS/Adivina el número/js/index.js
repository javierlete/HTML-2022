window.addEventListener('DOMContentLoaded', function() {
    const objetivo = aleatorio(1, 100);
    
    const boton = document.querySelector('#btn-comprobar');
    const textNumero = document.getElementById('numero');
    const spanMensaje = document.getElementById('mensaje');

    boton.addEventListener('click', function() {
        const numero = textNumero.value;
        let resultado;

        if(objetivo > numero) {
            resultado = 'El número que debes adivinar es mayor que ' + numero;
        } else if(objetivo < numero) {
            resultado = 'El número que debes adivinar es menor que ' + numero;
        } else {
            resultado = 'Has acertado';
        }

        spanMensaje.innerText = resultado;

        textNumero.value = '';
    });
});

function aleatorio(desde, hasta) {
    const numero = Math.random() * (hasta - desde);

    return Math.round(numero) + desde;
}
