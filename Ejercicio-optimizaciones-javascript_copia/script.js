let arrayImagenes = ["media/blog2_copia.jpg", "media/camionetAmarillo_copia.jpg" , "media/concierto_dembow_copia.jpg" , "media/festival1_copia.jpg" ]

let numero = 0;

let estadoIntervalo = true;

let imagen = document.getElementById("imagen");

function handEvents(){
    let atras = document.getElementById("atras");
    let delante = document.getElementById("delante");
    let parar = document.getElementById("stop");
    let botonesSeccion = document.getElementsByClassName("botonCirculo")


    parar.addEventListener("click", pararIntervalo)
    delante.addEventListener("click", imagenDelante);
    atras.addEventListener("click", imagenAtras);


for(let i = 0; i < botonesSeccion.length; i++){

botonesSeccion[i].addEventListener("click", saltaImagen);

 }

}

function saltaImagen(e){
    let textoBoton = parseInt(e.target.innerHTML);

    numero = textoBoton -1;

    pintaBotones( )
    imagen.src = arrayImagenes[numero];
}



function pararIntervalo( ){

    if (estadoIntervalo == true){
        estadoIntervalo = false;
        clearInterval(intervalo);
    }else{
        estadoIntervalo = true;
        intervalo = setInterval(imagenDelante,2000);
    }

}


function pintaBotones( ){
    let botonesSeccion = document.getElementsByClassName("botonCirculo")
    for (let i = 0; i < botonesSeccion.length; i++){

        botonesSeccion[i].classList.remove("botonCirculoActivo");
    }

    botonesSeccion[numero].classList.add("botonCirculoActivo");


}



function imagenDelante ( ) {

    numero ++;
    if (numero == arrayImagenes.length){
        numero = 0;
    }

    pintaBotones( )
    imagen.src = arrayImagenes[numero];
}






function imagenAtras ( ) {

    numero --;
    if (numero <0) {
        numero = arrayImagenes.length -1 ; //aqui ponemos -1 porque la posicion 4 no existe pero como si fueran
        //8 imagenes, se pondrá en la última -1
    }

    pintaBotones( )
    imagen.src = arrayImagenes[numero];
}




let intervalo = setInterval(imagenDelante,2000); //ESto es para que pase solo cada 2 segundos y siga la opcion de poder pasarlo



window.onload = handEvents;