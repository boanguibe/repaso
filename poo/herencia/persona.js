// Propiedades o atributos de la clase
export default class Persona {
    nombre
    edad

    // Me sirve para inicializar las propiedades de clase
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    toString(){
        // alt+96 = ``
        return `Nombre: ${this.nombre} Edad: ${this.edad}`
    }
}


// Vamos a crear una instancia de la clase Persona

//const instanciaPersona = new Persona('Juan', 30)
//console.log(instanciaPersona.toString())