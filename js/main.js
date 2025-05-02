

function calculadoraimc(){
    const nombre = document.getElementById("nombre").value;
    const peso = document.getElementById("peso").value;
    const estatura = document.getElementById("estatura").value;
    const imc = peso /(estatura**2);
    let imagen ='';
    let mensaje = '';
    if (imc<18.5){
        mensaje= "Su peso esta por debajo de lo normal.";
        imagen = "img/bajo.jpg";
    } else if (imc >= 18.5 && imc <24.9){
        mensaje= "Su peso esta normal.";
        imagen = "img/normal.jpg";
    } else if (imc >= 25 && imc <29.9){
        mensaje= "Su peso se encuetra sobre el peso normal.";
        imagen = "img/obeso.jpg";
    } else if (imc >= 30){
        mensaje= "se encuentra en obesidad.";
        imagen = "img/sobrepeso.jpg";
    } else{
        mensaje="Ingrese bien sus datos por favor";
    }
    document.getElementById("Resultado").innerHTML=`<p>${nombre}, Su imc es <strong>${imc}</strong> -${mensaje}</p>`;
    document.getElementById("imagenr").src=imagen;
} 

function reiniciarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("estatura").value = "";
    document.getElementById("Resultado").innerHTML = "";
    
}

   