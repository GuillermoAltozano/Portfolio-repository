var arrayFrases = ["Diseño de niveles: Diseñando un nivel de sigilo, basado en Aragami, desde sus puzles y estructura hasta la progresión del jugador.","Diseño audiovisual: Ejemplos sobre mi experiencia en la edición de videos, audio y efectos audiovisuales.","Programación: Ejemplos de codigo en diferentes proyectos de Unity y Unreal en sus respectivos lenguajes de codigo, C# y Blueprints","Modelado 3D: Muestras y fotos de diferentes modelos en 3D utilizando programas como Substance y 3DMax"];
var arrayImagenes = ["media/img/Diseño 4.PNG","media/img/Audiovisual 1.PNG", "media/img/Programación 6.PNG", "media/img/Modelado 1.jpg"];

var timer = 0;
var arrayN = 0;
var intervalo;

function activar(){
    intervalo = setInterval(temporizador,1000);
    
}

function temporizador(){
    timer--;
    
    if(timer <=0){
        timer = 5;
        arrayN++;
        
        if(arrayN >= 4){
            arrayN = 0;
            
        }
        changeImagen();
        changePhrase();
        
    }

}

function changeImagen(){
    document.getElementById('Imagen').src = arrayImagenes[arrayN];
}

function changePhrase(){
    document.getElementById('sliderTexto').innerHTML = arrayFrases[arrayN];
    
    
}

function loadScreen(value2){
    
    var nombre = value2;


    switch(nombre){
        case "Diseño de niveles":
            window.location.href = "html/DiseñoDeNivelesHTML.html"
        break;

        case "Diseño Audiovisual":
            window.location.href = "html/DiseñoAudiovisualHTML.html"
        break;

        case "Programación en C#/Blueprints": 
            window.location.href = "html/ProgramacionHTML.html"
        break;

        case "Modelado 3D":
            window.location.href = "html/ModeladoHTML.html"
        break;
    }

}



