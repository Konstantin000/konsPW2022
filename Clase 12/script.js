function saludar(){console.log("Hola")}
//Declaracion de una funcion 

saludar() // invocacion de una funcion 

function sumar(num1,num2){console.log(num1+num2)}

sumar(1,2)

function restar(num1,num2){return num1 - num2}

//restar()


function mostrarPorConsola(dato){console.log(dato)}

mostrarPorConsola(restar(10,5))


function mostrarPorConsola(string,dato)
{return num1 - num2}


function multiplicar(a,b){
    return "el resultado de la multiplicacion entre" ${a} y ${b} es ${a*b}
}


mostrarPorConsola(multiplicar(2,2))
(a,b)

// No importa el orden 


//las variables no funcionan de la misma forma que las funciones
// la difernecia es que si uso una funcion flecha la debo poner al principio antes que invocarlas 

saludarFlecha()

let saludarFlecha =()=> console.log("hola en flecha")

let sumarEnFlecha = (a,b)=> {
    let c = a + b
    return c
}

let restar = (a,b)

//si la funcion flecha ocupa una sola linea no debo poner {}, si uso mas si



/*
1) crear una calculador con las siguientes operaciones
a)sumar
b)restar
c)multiplicar
d)dividir
e)potencia
f)modulo 

2)Crear una calculadora del IMC(indice de masa corporal)

*/

let producto ={
    id="1",
    nombre: "chipa",
    PrecioPorCuarto: 800,
    IncluirIva: function(){
        return this.PrecioPorCuarto *1.21
    }
}

console.log(producto.IncluirIva())