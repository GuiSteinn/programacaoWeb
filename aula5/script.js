function getvalor1(){
    return parseFloat(document.getElementById("valor1").value)
} 

function getvalor2(){
    return parseFloat(document.getElementById("valor2").value)
} 

function somar(){
    informaResultado(getvalor1() + getvalor2())
} 

function subtrair(){
    informaResultado(getvalor1() - getvalor2())
} 

function dividir(){
    informaResultado(getvalor1() / getvalor2())
} 

function multiplicar(){
    informaResultado(getvalor1() * getvalor2())
}  

function informaResultado (valor) {
    var elResultado = document.getElementById("Resultado"); 
    elResultado.value = valor;
    if(valor < 0){ 
        elResultado.style = "background-color: red"; 
    } else if (valor >  0) {
        elResultado.style = "background-color: green";
    }   else{
        elResultado.style ="background-color: gray"
    }    
    }
