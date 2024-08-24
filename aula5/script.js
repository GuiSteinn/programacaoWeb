function getValor1(){
    return parseFloat(document.getElementById("valor1").value)
} 

function getValor2(){
    return parseFloat(document.getElementById("valor2").value)
} 

function somar(){
    informaResultado(getValor1() + getValor2())
} 

function subtrair(){
    informaResultado(getValor1() - getValor2())
} 

function dividir(){
    informaResultado(getValor1() / getValor2())
} 

function multiplicar(){
    informaResultado(getValor1() * getValor2())
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
