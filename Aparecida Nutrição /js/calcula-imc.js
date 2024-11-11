var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for(var i=0; i < pacientes.length; i++){
var paciente = pacientes[i];
var tbPeso = paciente.querySelector(".info-peso");
var peso = tbPeso.textContent;

var tbAltura = paciente.querySelector(".info-altura");
var altura = tbAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);

// var tdGordCorp = paciente.querySelector(".info-gordura");
// var gordura = tdGordCorp.textContent;

if(!pesoEhValido){
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido")
    //alert("Peso inválido");
}
if(!alturaEhValida){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido")
    //alert("Altura inválido");
}
if(pesoEhValido && alturaEhValida){
    var imc = calcularImc(peso, altura);
    tdImc.textContent = imc;
    //alert("Cálculo realizado! Seu imc é: "+imc.toFixed(2));
}
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 300){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calcularImc(peso, altura){
    var imc = 0;
    imc = peso / (altura *altura);
    return imc.toFixed(2);
}