document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault();

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        let numeroRedondo = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroRedondo;
        document.querySelector('.resultado').style.display = 'block';
    })
})