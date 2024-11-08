
window.onload=()=>{


function enMayusculas(){

    let text=document.getElementById("nombre").value;

    document.getElementById("nombre").value=text.toUpperCase()

}

function toUpperCase(){
    let texto=document.getElementById("texto").value;
    
    document.getElementById("texto").value=texto.toUpperCase()

}

function toUpperCasePropioElemento(element){

    let texto=element.value;
    element.value=texto.toUpperCase();
}



let elemento = document.getElementById("texto");
elemento.addEventListener("keyup",function(event){
    event.target.value=event.target.value.toUpperCase();
})

}