window.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('body > h1');
    const form = document.querySelector('form');

    console.log(h1.innerHTML);

    form.addEventListener('submit', (e) =>  {
        e.preventDefault();

        const nombre = form.nombre.value;

        const span = document.createElement('span');

        span.innerHTML = 'Hola ' + nombre;

        form.appendChild(span);
        
        // h1.innerHTML = 'Hola ' + nombre;
        // form.style.display = 'none';
    });


    h1.addEventListener('click', () => {
        const anterior = document.body.className;
        let nuevo;

        if(anterior === 'claro') {
            nuevo = 'oscuro';
        } else {
            nuevo = 'claro';
        }

        document.body.className = nuevo;
    });
});
