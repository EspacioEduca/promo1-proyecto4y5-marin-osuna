
$(".pregunta2").hide()
$(".pregunta3").hide()
$(".pregunta4").hide()
$(".pregunta5").hide()
$(".pregunta6").hide()
$(".abc").hide()
$(".resultado").hide()

//variables
let eleccion1
let eleccion2
let eleccion3
let eleccion4
let eleccion5
let eleccion6
let contador= 0

$(".abc").click(function(){
    $(".pregunta6").hide()
    $(".pregunta1").show()
    contador=contador+ 1
    console.log(contador)
    $(".contador").text("Haz hecho este cuestionario: "+contador)
    $(".text").hide()

});

$(".enviar1").click(function(){
    eleccion1= $(".input1").val();
    console.log(eleccion1);
    $(".pregunta1").hide()
    $(".pregunta2").show()

    //escon der preg 1
    //mostrar pregunta 2
    
});
$(".enviar2").click(function(){
    eleccion2= $(".input2").val();
    console.log(eleccion2);
    $(".pregunta2").hide()
    $(".pregunta3").show()
});

$(".enviar3").click(function(){
    eleccion3= $(".input3").val();
    console.log(eleccion3);
    $(".pregunta3").hide()
    $(".pregunta4").show()
});

$(".enviar4").click(function(){
    eleccion4= $(".input4").val();
    console.log(eleccion4);
    $(".pregunta4").hide()
    $(".pregunta5").show()
});

$(".enviar5").click(function(){
    eleccion5= $(".input5").val();
    console.log(eleccion5);
    $(".pregunta5").hide()
    $(".pregunta6").show()

});

$(".enviar6").click(function(){
    eleccion6= $(".input6").val();
    console.log(eleccion6);
    $(".resultado").append(`<div class="text">
    <p> Mi lugar favorito  ${eleccion1},   Me gusta  ${eleccion2},
     Me identifico siendo  ${eleccion3},  Color favorito:  ${eleccion4}, 
     Soy con mi entorno  ${eleccion5},  Me gustaría tener  ${eleccion6} dientes.<p>
    </div>`)
    $(".abc").show()
    $(".resultado").show()
});



$(".contador").append()


