window.addEventListener("load", function () {
    
    //Ejercicio Abracadabra

    //punto 3
    let buttonAbracadabra = document.querySelector('#abracadabra');

    buttonAbracadabra.addEventListener('click', function(){
       let nombre = prompt('ingrese su nombre')
       let titulo = document.querySelector('#titular');
   
       titulo.innerText = "Hi. I'm " + nombre
    });

    //Punto 4
    let buttonGet = document.querySelector('#buttonGet');
    let parrafo = document.querySelector('.parrafo-color');
    
    buttonGet.addEventListener('dblclick', function(){
        parrafo.style.color = "red";
    });

    //Punto 5
    let arrayColores = ['red', 'blue', 'green', 'orange', 'yellow']
    let numeroAleatoreo = Math.floor(Math.random() * 5); ;
    let colorAlAzar = arrayColores[numeroAleatoreo]
    
    //Punto 6
    buttonGet.addEventListener('dblclick', function() {
        parrafo.style.color = colorAlAzar;
    });

    //Punto 7
    let seccion1 = document.querySelector('#section1');
    let seccion2 = document.querySelector('#section2');
    let seccion3 = document.querySelector('#section3');

    seccion1.addEventListener('click', function(){
        let contenidoH3 = this.querySelector('h3').innerHTML;
        alert(`Clickeaste sobre ${contenidoH3}`);
    });

    seccion2.addEventListener('click', function(){
        let contenidoH3 = this.querySelector('h3').innerHTML;
        alert(`Clickeaste sobre ${contenidoH3}`);
    });

    seccion3.addEventListener('click', function(){
        let contenidoH3 = this.querySelector('h3').innerHTML;
        alert(`Clickeaste sobre ${contenidoH3}`);
    });

    //Punto 8
    let buttonRecentWork = document.querySelector('#recentWork');
    let parraparrafoRecentWork = document.querySelector('#parrafoRecentWork');

    buttonRecentWork.addEventListener('mouseover', function(){
        parraparrafoRecentWork.style.color = colorAlAzar;
    });
    buttonRecentWork.addEventListener('mouseout', function(){
        parraparrafoRecentWork.style.color = '#888';
    });

    //Punto 9
    let imagenLechuza = document.querySelector('#lechuza');
    let delay = 5000;

    imagenLechuza.addEventListener('click', function(){
        alert('Preparate para el futuro...')
        
        setTimeout(function(){
            alert('Y el futuro ya llego!')
        }, delay);
    });

    //Punto 10
    // addEventListener('keypress', function(){
    //     alert('Ey! tocaste el teclado')
    // });

    //Punto 11
    // addEventListener('keypress', function(e){
    //     if(e.key = ' ') {
    //         alert('Ey! tocaste la barra')
    //     }
    // });

    //Punto 12
    let inputEmail = document.querySelector('#email')

    inputEmail.addEventListener('keypress', function(e){
        if(e.key = ' ') {
            alert('Ey! tocaste la barra')
        }
    });


});